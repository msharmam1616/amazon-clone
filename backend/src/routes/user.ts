import { User } from "../db";

import { JWT_SECRET } from "../config";
import { userMiddleware, authMiddleware } from "../validation";
const express= require('express');
const router= express.Router();
const jwt= require('jsonwebtoken');


router.post('/signUp', userMiddleware, async (req: any,res:any,next:any) => {

    const username= req.body.username;
    const password= req.body.password;
    const firstname= req.body.firstName;
    const lastname= req.body.lastName;


    const userData= await User.create({
        username,
        password,
        firstname,
        lastname
    })

    const userId= userData._id;

    const token= jwt.sign({
        userId
    }, JWT_SECRET );

    res.json({
        msg: "user created successfully!",
        token
    })
}) 

router.post('/signIn', userMiddleware, async (req: any,res:any,next:any) => {
    const username= req.body.username;
    const password= req.body.password;

    const userData= await User.create({
        username,
        password
    })

    const userId= userData._id;

    const token= jwt.sign({
        userId
    }, JWT_SECRET );

    res.json({
        msg: "user created successfully!",
        token
    })
}) 

module.exports= router;