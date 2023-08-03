import { INote } from './note.interface';
import { Note } from './note.model';

const createNote = async (payload: INote): Promise<INote> => {
  const NotePayload: INote = { ...payload };
  const result = await Note.create(NotePayload);
  return result;
};

const getAllNotes = async() => {
  const result = await Note.find({});
  return result;
};

const getSingleNote = async (id: string) => {
  const result = await Note.find({ id: id })
    .populate('instructor')
    .populate('review')
    .populate('lessons');

  return result;
};

const deleteNote = async (id: string) => {
  const result = await Note.findOneAndDelete({ id: id });

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
