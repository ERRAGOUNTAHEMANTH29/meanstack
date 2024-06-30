const mongoose=require("mongoose")
const {v4: uuidv4}=require("uuid")

const orderschema = new mongoose.Schema({
    _id:{
        type:String,
        default:uuidv4
    },
    userid:{
        type:String,
        
    },
    productid:{
        type:String,
        
    },
    delivery:{
        type:String,
        default:"pending"
    }

})
const ordermodel =mongoose.model("orders",orderschema)
module.exports=ordermodel