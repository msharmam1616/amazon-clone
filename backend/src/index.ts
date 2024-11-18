const express= require('express');
const cors= require('cors');

const userRoute= require('./routes/user');
const productsRoute= require('./routes/product')

const app= express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productsRoute);

app.listen(3000, ()=>{
    console.log("Connected!!");
})