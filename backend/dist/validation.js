"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = exports.userMiddleware = void 0;
const config_1 = require("./config");
const db_1 = require("./db");
const zod = require('zod');
const jwt = require('jsonwebtoken');
const signUpBody = zod.object({
    firstname: zod.string().optional(),
    lastName: zod.string().optional(),
    username: zod.string().min(1, { message: "Username can't be empty!" }),
    password: zod.string().min(1, { message: "password can't be empty!" })
});
function userMiddleware(req, res, next) {
    const username = req.body.username;
    const success = signUpBody.safeParse(req.body);
    db_1.User.findOne({
        username
    }).then((value) => {
        if (value || !success) {
            res.status(411).json({
                msg: "User Already Exists or invalid params sent!"
            });
        }
        else {
            next();
        }
    });
}
exports.userMiddleware = userMiddleware;
function authMiddleware(req, res, next) {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer')) {
        res.status(403).json({
            msg: "Unauthorized!"
        });
    }
    const token = header.split(' ')[1];
    try {
        const decoded = jwt.verify(token, config_1.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch (_a) {
        res.status(403).json({
            msg: 'unauthorized'
        });
    }
}
exports.authMiddleware = authMiddleware;
