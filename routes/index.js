import express from 'express';
import * as notes from './notes.js';

const router = express.Router();

router.get('/notes', notes.index);
router.post('/notes', notes.create);
router.get('/notes/:id', notes.show);
router.put('/notes/:id', notes.update);
router.delete('/notes/:id', notes.deleteNote);

export default router;