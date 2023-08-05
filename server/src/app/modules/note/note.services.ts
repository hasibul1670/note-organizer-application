import { StatusCodes } from 'http-status-codes';
import { ApiError } from '../../../handlingError/ApiError';
import { customDateFormat } from '../../../helpers/customDateFormat';
import { generateNoteId } from '../../../helpers/generateId';
import { getEmailFromRefreshToken } from '../../../helpers/getEmailFromRefreshToken';
import { IUser } from '../user/user.interface';
import { INote } from './note.interface';
import { Note } from './note.model';

const createNote = async (payload: INote): Promise<INote> => {
  const date = new Date();
  const noteID = await generateNoteId();
  const formattedDate = customDateFormat(date);
  const NotePayload: INote = { ...payload, date: formattedDate, id: noteID };
  const result = await Note.create(NotePayload);
  return result;
};

const getAllNotes = async (refreshToken: string) => {
  const email = getEmailFromRefreshToken(refreshToken);
  const notes = (await Note.find({}).populate('userID')) as Array<{
    userID: IUser;
  }>;
  const filteredNotes = notes.filter(
    note => note.userID && note.userID.email === email
  );
  return filteredNotes;
};

const getSingleNote = async (id: string) => {
  const result = await Note.find({ _id: id }).populate('userID');
  return result;
};

const deleteNote = async (id: string, refreshToken: string) => {
  const email = getEmailFromRefreshToken(refreshToken);
  let result, userEmail;
  const currentNote = (await Note.findById(id).populate('userID')) as {
    userID: IUser;
  };
  if (currentNote && currentNote.userID) {
    userEmail = currentNote.userID.email;
  }
  if (email === userEmail) {
    result = await Note.findByIdAndDelete(id);
  } else {
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'Unauthorized');
  }
  return result;
};

const updateNote = async (
  id: string,
  payload: Partial<INote>,
  refreshToken: string
): Promise<INote | null> => {
  const email = getEmailFromRefreshToken(refreshToken);
  const noteToUpdate = (await Note.findById(id).populate('userID')) as {
    userID: IUser;
  };
  if (!noteToUpdate || noteToUpdate.userID.email !== email) {
    throw new Error('Unauthorized');
  }
  const updatedNote = await Note.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return updatedNote;
};
export const NoteService = {
  createNote,
  deleteNote,
  getAllNotes,
  getSingleNote,
  updateNote,
};
