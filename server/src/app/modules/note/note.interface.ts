import { Model, Types } from 'mongoose';
import { IInstructor } from '../instructor/instructor.interface';



export type INote = {
  id: string;
  title: string;
  NoteDescription: string;
  year: string;
  category: string;
  instructor?: Types.ObjectId | IInstructor;
  startMonth: INoteMonths;
  endMonth: INoteMonths;
  price: number;
  duration?: string;
  enrollmentDeadline?: Date;
  language?: string;
  prerequisites?: string;
  NoteImage?: string;
  isFeatured?: boolean;
  rating?: number;

  lessons?: Types.ObjectId | IInstructor;
  review?: Types.ObjectId | IInstructor;

};



export type Review = {
  studentName: string;
  comment: string;
  rating: number;
};

export type NoteModel = Model<INote>;

export type INoteFilters = {
  searchTerm?: string;
};
