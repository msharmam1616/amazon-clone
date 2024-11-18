
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://mohit:mohit123@cluster0.1s8klrl.mongodb.net/amazon-clone?retryWrites=true&w=majority').then(() => {
    console.log("connection successful");
});

const UserSchema= mongoose.Schema({
    username:{
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
    },
    isAdmin: {
        type: Boolean
    }
})

const ProduceSchema= mongoose.Schema({
    category:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    type: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true
    },
    brand: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true
    },
    imagePath: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

export const User= mongoose.model('User', UserSchema);
export const Product= mongoose.model('Product', ProduceSchema);


