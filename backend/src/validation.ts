import { JWT_SECRET } from "./config";
import { User } from "./db";

const zod= require('zod');
const jwt= require('jsonwebtoken');


const signUpBody= zod.object({
    firstname: zod.string().optional(),
    lastName: zod.string().optional(),
    username: zod.string().min(1, {message: "Username can't be empty!"}),
    password: zod.string().min(1, {message: "password can't be empty!"})
})

export function userMiddleware(req:any,res:any,next:any) {

    const username= req.body.username;

    const success= signUpBody.safeParse(req.body);

    User.findOne({
        username
    }).then((value: any)=>{
        if(value || !success){
            res.status(411).json({
                msg: "User Already Exists or invalid params sent!"
            })
        }else{
            next();
        }
    })

}

export function  authMiddleware(req: any, res: any, next: any) {
    const header= req.headers.authorization;

    if(!header || !header.startsWith('Bearer')){
        res.status(403).json({
            msg: "Unauthorized!"
        })
    }

    const token= header.split(' ')[1];

    try{
        const decoded= jwt.verify(token, JWT_SECRET);
        req.userId= decoded.userId;
        next();
    } catch {
        res.status(403).json({
            msg: 'unauthorized'
        })
    }
}

