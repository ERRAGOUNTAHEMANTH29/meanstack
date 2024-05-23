const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://hemantherragounta29:b22xPqjtHdwZQbfp@cluster0.im0zbw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected sucessfully");
})
.catch((error)=>{
    console.log("error while connecting mongoose ",error);
}
)
module.exports=mongoose.connection;