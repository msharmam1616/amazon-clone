"use strict";
const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user');
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", userRoute);
app.listen(3000, () => {
    console.log("Connected!!");
});
