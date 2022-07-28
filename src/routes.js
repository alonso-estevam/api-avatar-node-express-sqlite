import { Router } from 'express';
import { createTable, insertCharacter, updateCharacter, selectAllCharacters, selectCharacter, deleteCharacter } from './controller/character-controller.js';

const router = Router();
router.get('/characters', selectAllCharacters)
router.get('/character', selectCharacter)

export default router;