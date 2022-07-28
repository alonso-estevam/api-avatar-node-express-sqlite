// import { openDb } from './configDB.js';
// import { createTable, insertCharacter, updateCharacter, selectAllCharacters, selectCharacter, deleteCharacter } from './controller/character-controller.js';

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

import router from './routes.js';

app.use(router);

// openDb() was removed
//createTable();

// app.get('/', (req, res) => {
//     res.send("Hello world!")
// });

// app.get('/characters', async (req, res) => {
//     let characters = await selectAllCharacters();
//     res.json(characters);
// })

// app.get('/character', async (req, res) => {
//     let character = await selectCharacter(req.body.id);
//     res.json(character);
// })

// app.post('/characters', (req, res) => {
//     insertCharacter(req.body);
//     res.json({
//         "statusCode": 201
//     })
// });

// app.put('/characters', (req, res) => {
//     if(req.body && !req.body.id) {
//         res.json({
//             "statusCode": "400",
//             "message": "you need to inform some id"
//         })
//     } else {
//         updateCharacter(req.body)
//         res.json({
//             "message": "Character successfully updated!"
//         })
//     }
// });

// app.delete('/character', async (req, res) => {
//     let character = await deleteCharacter(req.body.id);
//     res.json(character);
// })

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})