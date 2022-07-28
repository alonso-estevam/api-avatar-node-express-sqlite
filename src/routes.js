import { Router } from 'express';
import { createTable, insertCharacter, updateCharacter, selectAllCharacters, selectCharacter, deleteCharacter } from './controller/character-controller.js';

const router = Router();
router.get('/', (req, res) => {
    res.send("Working with routes")
})

export default router;