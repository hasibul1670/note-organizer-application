import express from 'express';
import { NoteRoutes } from '../modules/note/note.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/note',
    route: NoteRoutes,
  },
];

moduleRoutes.forEach(r => router.use(r.path, r.route));

export default router;
