import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { customDateFormat } from '../../../helpers/customDateFormat';
import { generateNoteId } from '../../../helpers/generateId';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
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

const getAllNotes = async () => {
  const result = await Note.find({});
  return result;
};

const getSingleNote = async (id: string) => {
  const result = await Note.find({ _id: id }).populate('userID');
  return result;
};

const deleteNote = async (id: string, refreshToken: string) => {
  const decodedToken = jwtHelpers.verifyToken(
    refreshToken,
    config.jwt.refresh_secret as Secret
  );
  const { email } = decodedToken;
  const currentNote =await Note.find({ _id: id }).populate('userID');
  if (!currentNote) {
    throw new Error('Note not found');
  }
  const targetedNoteUserEmail = currentNote['userID']['email'] as string;
  console.log('Hello',targetedNoteUserEmail );

  if (email ===targetedNoteUserEmail ) {
    const result = await Note.findOneAndDelete({ _id: id });
  } else {
    throw new Error('Unauthorized');
  }


  return result;
};


const updateNote = async (
  id: string,
  payload: Partial<INote>
): Promise<INote | null> => {
  const result = await Note.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const NoteService = {
  createNote,
  deleteNote,
  getAllNotes,

  getSingleNote,
  updateNote,
};
