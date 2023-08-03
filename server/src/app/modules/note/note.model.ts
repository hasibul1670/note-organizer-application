import { Schema, model } from 'mongoose';
import { INote, NoteModel } from './note.interface';


const NoteSchema = new Schema<INote>(
  {
    id: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    noteDescription: {
      type: String,
      required: true,
    },
    date: {
      type: String,
     
    },
    pinNote: {
      type:Boolean,
   
    },
    image: {
      type: String,
      
    },
    bgColor: {
      type: String,
     
    },

  },
  {
    timestamps: true,
  }
);

NoteSchema.pre('save', async function (next) {
  const existingNote = await Note.findOne({ title: this.title });
  if (existingNote) {
    throw new Error('This Note is already Exist');
  }
  next();
});

export const Note = model<INote, NoteModel>('Note', NoteSchema);
