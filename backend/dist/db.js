"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mohit:mohit123@cluster0.1s8klrl.mongodb.net/amazon-clone?retryWrites=true&w=majority').then(() => {
    console.log("connection successful");
});
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
});
exports.User = mongoose.model('User', UserSchema);
