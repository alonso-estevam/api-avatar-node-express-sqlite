import { Router } from 'express';
import { createTable, insertCharacter, updateCharacter, selectAllCharacters, selectCharacter, deleteCharacter } from './controller/character-controller.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "message": "API running"
    })
})

router.get('/characters', selectAllCharacters);
router.get('/character', selectCharacter);
router.post('/characters', insertCharacter);
router.put('/character', updateCharacter);
router.delete('/character', deleteCharacter);

export default router;