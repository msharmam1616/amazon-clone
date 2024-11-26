import { User } from "../models/user";


const dbClient= require('../config/db');

async function addUser(userData: User){
    const addUserQuery= `
    INSERT INTO users2(name,email,password) VALUES($1,$2,$3) RETURNING *;
    `
    const values= [userData.name, userData.email, userData.password];
    const connectedClient= await dbClient();

    try {
        await connectedClient.query(addUserQuery, values);
        return {
            type: "success"
        }
    }catch(err){
        console.log("User Not Inserted!!");
        return {
            type: "User Not Inserted!"
        }
    }
}

export default addUser;