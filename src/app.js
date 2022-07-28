// import { openDb } from './configDB.js';
import { createTable, insertCharacter, updateCharacter } from './controller/character-controller.js';

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// openDb() was removed
createTable();

app.get('/', (req, res) => {
    res.send("Hello world!")
});

app.post('/characters', (req, res) => {
    insertCharacter(req.body);
    res.json({
        "statusCode": 201
    })
});

app.put('/characters', (req, res) => {
    if(req.body && !req.body.id) {
        res.json({
            "statusCode": "400",
            "message": "you need to inform some id"
        })
    } else {
        updateCharacter(req.body)
        res.json({
            "message": "Character successfully updated!"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})