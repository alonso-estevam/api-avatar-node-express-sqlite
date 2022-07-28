import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Character (id INTEGER PRIMARY KEY, name TEXT, nation TEXT, bender INTEGER)')
    })
}

export async function insertCharacter(character) {
    openDb().then(db => {
        db.run('INSERT INTO Character (name, nation, bender) VALUES (?,?,?)', [character.name, character.nation, character.bender])
    });
}

export async function updateCharacter(character) {
    openDb().then(db => {
        db.run('UPDATE Character SET name=?, nation=?, bender=? WHERE id=?', [character.name, character.nation, character.bender, character.id])
    });
}