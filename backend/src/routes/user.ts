import { User } from "../db";

import { JWT_SECRET } from "../config";
import { userMiddleware, authMiddleware } from "../validation";
const express= require('express');
const router= express.Router();
const jwt= require('jsonwebtoken');
import addUser from "../services/user-services";


router.post('/signUp', userMiddleware, async (req: any,res:any,next:any) => {

    const name= req.body.username;
    const password= req.body.password;
    const email= req.body.email;

   const user= await addUser({
        name,
        password,
        email
    });

    
    const token= jwt.sign({
        email
    }, JWT_SECRET );
    
    if(user.type == "success"){
       return res.json({
            msg: "Success",
            email: email,
            token
        })
    }

    res.json({
        msg: "Error"
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