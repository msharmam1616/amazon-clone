import { Product } from "../models/product";

 const dbClient= require("../config/db");

export async function addProduct(product : Product){
    return new Promise(async (resolve, reject) =>{
          const client= await dbClient();
        
          const insertProductQuery= `
          insert into products(category, type, name, brand, price, imagePath, description, quantity, rating) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
          `
          const values= [product.category, product.type, product.name, product.brand, product.price, product.imagePath, product.description, product.quantity, product.rating];
          try {
            await client.query(insertProductQuery, values);
            resolve("Product ADDED!");
          }catch(err){
            console.log(err);
            reject("Product failed to add!");
          }
    })
}