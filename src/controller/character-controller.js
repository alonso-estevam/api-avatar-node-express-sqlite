import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Character (id INTEGER PRIMARY KEY, name TEXT, nation TEXT, bender INTEGER)')
    })
}

export async function selectAllCharacters(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Character')
        .then(characters => res.json(characters))
    });
}

export async function selectCharacter(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Character WHERE id=?', [id])
        .then(character => res.json(character))
    });
}

export async function insertCharacter(req, res) {
    let character = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Character (name, nation, bender) VALUES (?,?,?)', [character.name, character.nation, character.bender])
    });
    res.json({
        "statusCode": 201,
        "message": "Added successfully"
    })
}

export async function updateCharacter(req, res) {
    let character = req.body;
    openDb().then(db => {
        db.run('UPDATE Character SET name=?, nation=?, bender=? WHERE id=?', [character.name, character.nation, character.bender, character.id])
    });
    res.json({
        "statusCode": 201,
        "message": "Character successfully updated!"
    })
}

export async function deleteCharacter(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Character WHERE id=?', [id])
        .then(res => res)
    });
    res.json({
        "statusCode": 200,
        "message": "Character successfully deleted!"
    })
}