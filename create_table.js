import {sql} from './db.js'

sql`
    CREATE TABLE videos 
    (
        id text primary key,
        title text unique,
        description text,
        duration integer 
    );
`.then( () => {console.log('Tabela criada!')});