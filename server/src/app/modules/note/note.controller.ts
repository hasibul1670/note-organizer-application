import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import catchAsync from '../../../shared/catchAsync';
import sendReponse from '../../../shared/sendResponse';
import { INote } from './note.interface';
import { NoteService } from './note.services';

const sendFacultyResponse = (res: Response, message: string, data: any) => {
  sendReponse<INote>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message,
    data,
  });
};

const createNote = catchAsync(async (req: Request, res: Response) => {
  const { ...NoteData } = req.body;
  const result = await NoteService.createNote(NoteData);
  sendFacultyResponse(res, 'Note is Created Successfully!', result);
});

const getAllNotes = catchAsync(async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken
  const result = await NoteService.getAllNotes(refreshToken);
  sendFacultyResponse(res, 'Notes retrieved successfully !', result);
});

const deleteNote = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const refreshToken = req.cookies.refreshToken;
  const result = await NoteService.deleteNote(id, refreshToken);

  sendFacultyResponse(res, ' Note Deleted successfully !', result);
});
const getSingleNote = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await NoteService.getSingleNote(id);
  sendFacultyResponse(res, 'Single Note retrieved successfully !', result);
});
const updateNote = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const refreshToken = req.cookies.refreshToken;
  const UpdateData = req.body;
  const result = await NoteService.updateNote(id, UpdateData,refreshToken);
  sendFacultyResponse(res, 'Note Data Is Updated successfully!', result);
});

export const NoteController = {
  createNote,
  getAllNotes,
  getSingleNote,
  deleteNote,
  updateNote,
};
