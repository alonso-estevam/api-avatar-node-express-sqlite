import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Character (id INTEGER PRIMARY KEY, name TEXT, nation TEXT, bender INTEGER)')
    })
}