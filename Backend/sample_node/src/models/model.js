const mongoose=require('mongoose')
const schema =new mangoose.Schema({
    name:{
        type:String},
        Age:{
            type:Number},
            mobile:{
                type:Number},
                email:{
                    type:String
                    },
                    password:{
                        type:Number},
    })
    const Model = mongoose.model("register",Schema);
module.exports = Model;

    

