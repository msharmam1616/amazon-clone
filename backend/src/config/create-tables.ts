

const dbClient= require('./db');

async function createTable(){
    const createUsersTable= `
      create table users2(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `
    const client= await dbClient();
    
    try {   
        await client.query(createUsersTable);
        console.log("Table Created!!");
    } catch(err){
      console.log("Table Not Created!");
    }
}



createTable();