
const { Pool } = require('pg');
const { Client }= require('pg');

require("dotenv").config();

async function getClient(){
    const client= new Client({
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        port: Number(process.env.PGPORT)
        // Enable SSL when connecting to Cloud!!.
        // ssl: {
        //     rejectUnauthorized: false, // Adjust this based on server requirements
        // }
    });

    try {
       const res= await client.connect();
       console.log("connected successfully!");
    } catch (err){
        console.log(err);
        console.log("failed to connect");
        return null;
    }
    return client;
}


module.exports= getClient;







