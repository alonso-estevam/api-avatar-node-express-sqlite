// import { openDb } from './configDB.js';
import { createTable } from './controller/character-controller.js';

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
    console.log(req.body);
    res.json({
        "statusCode": 200
    })
});

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})