const mongoose = require("mongoose")
require('dotenv').config();
mongoose.connect("mongodb+srv://hemantherragounta29:b22xPqjtHdwZQbfp@cluster0.im0zbw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/")
.then(()=>{
    console.log("Mongo Db is Connected")
})
.catch((error)=>{
    console.log("Mongo Db is not connected",error)}
)
module.exports=mongoose.connection;