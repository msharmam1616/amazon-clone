"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const config_1 = require("../config");
const validation_1 = require("../validation");
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
router.post('/signUp', validation_1.userMiddleware, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const userData = yield db_1.User.create({
        username,
        password,
        firstname,
        lastname
    });
    const userId = userData._id;
    const token = jwt.sign({
        userId
    }, config_1.JWT_SECRET);
    res.json({
        msg: "user created successfully!",
        token
    });
}));
router.post('/signIn', validation_1.userMiddleware, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const userData = yield db_1.User.create({
        username,
        password
    });
    const userId = userData._id;
    const token = jwt.sign({
        userId
    }, config_1.JWT_SECRET);
    res.json({
        msg: "user created successfully!",
        token
    });
}));
module.exports = router;
