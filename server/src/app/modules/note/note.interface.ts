import { Model } from 'mongoose';

export type INote = {
  id: string;
  title: string;
  noteDescription: string;
  date: string;
  category: string;
  pinNote: boolean;
  image: string;
  bgColor: string;
};

export type NoteModel = Model<INote>;

export type INoteFilters = {
  searchTerm?: string;
};
