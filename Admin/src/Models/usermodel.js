// const mongoose = require("mongoose");
// const{v4: uuidv4}=require("uuid");
// const registerSchema = new mongoose.Schema({
//     _id:{
//         type : String,
//         default: uuidv4, 
//     },
//     name:{
//         type:String,
//     },
//     email:{
//         type:String,
//     },
//     mobile:{
//         type:Number,
//     },
//     password:{
//         type:String,
//     },
//     active :{
//         type:Boolean,
//         default:true,
//     },
// })
// const registerModel = mongoose.model("register",registerSchema );
// module.exports=registerModel;
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const registerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

const registerModel = mongoose.model("register", registerSchema);
module.exports = registerModel;

