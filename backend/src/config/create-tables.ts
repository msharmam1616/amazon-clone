import { resolve } from "path";
import { Product } from "../models/product";


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


async function createProductTable(): Promise<string>{
  return new Promise(async (resolve,reject) =>{
    const createProductTable= `
      CREATE TABLE IF NOT exists products(
          id SERIAL PRIMARY KEY,
          category VARCHAR(50),
          type VARCHAR(50),
          name VARCHAR(50),
          brand VARCHAR(50),
          price DECIMAL(10,2),
          imagePath VARCHAR(200),
          description VARCHAR(500),
          quantity NUMERIC,
          rating NUMERIC
      )
    `
    const client= await dbClient();

    try {
      await client.query(createProductTable);
      console.log("Table Created Successfully!");
      resolve("success");
    }catch(err){
      console.log("Table Creation Failed!");
      reject("Error");
    }
  })
}
