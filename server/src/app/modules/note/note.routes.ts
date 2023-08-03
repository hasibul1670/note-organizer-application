import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { noteController } from './note.controller';
import { noteValidation } from './note.validation';

const router = express.Router();

router.post(
  '/create-note',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.INSTRUCTOR),
  noteController.createnote
);
router.get('/:id', noteController.getSinglenote);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  noteController.deletenote
);

router.patch(
  '/:id',
  validateRequest(noteValidation.updatenoteZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  noteController.updatenote
);

router.get('/', noteController.getAllnotes);

router.get('/instructor/:id', noteController.getAllnotesByInstructorId); 

export const NoteRoutes = router;
