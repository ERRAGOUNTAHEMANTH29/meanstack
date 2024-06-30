// const userModels= require("../Models/usermodel");
 
// //logics for Userdetails creation
// const Userdetails = async(body)=>{
//     const createdata = await  userModels.create(body)
//     return createdata;
// };
// //logics for getting all userdetails
// const getalluser=async()=>{
//     const alluserdetails = await userModels.find({});
//     return alluserdetails;
// }
// //logics for getting a specific usrer
// const getspecificuser = async(id)=>{
//     const specificuserdetails = await userModels.aggregate([
//        { $match:{
//             _id: id,
//         },},

//     ])
//     return specificuserdetails;
// }
// //logics for deleting a user by id
// const deleteuserdetails=async(id)=>{
//     const deleteuserdata = await userModels.findById({ _id: id});
//     if(!deleteuserdata){
//         console.log("user not found")
//     }
//     else{
//         const deleteuserdatas = await userModels.findByIdAndDelete({ _id: id});
//         console.log("deleteuserdatas");
//     }
//     return deleteuserdata ;
// }
// //logics for updating a user
// const updateuserdetails = async(id,body)=>{
//     const updateuserid = await userModels.findById({ _id: id});
//     if(!updateuserid){
//         console.log("no user to be updated")
//     }
   
//    const updateuserids = await userModels.findByIdAndUpdate({_id:id},body,{new:true});
//     console.log("updated user details")
    
//     return updateuserids;

// }

// module.exports={
//     Userdetails,
//     getalluser,
//     getspecificuser,
//     deleteuserdetails,
//     updateuserdetails,
// };
const userModels = require("../Models/usermodel");
const bcrypt = require("bcrypt");

// Logic for creating user details
const Userdetails = async (body) => {
    // Hash the password before saving
    body.password = await bcrypt.hash(body.password, 10);
    const createdata = await userModels.create(body);
    return createdata;
};

// Logic for getting all user details
const getalluser = async () => {
    const alluserdetails = await userModels.find({});
    return alluserdetails;
};

// Logic for getting a specific user
const getspecificuser = async (id) => {
    const specificuserdetails = await userModels.findById(id);
    return specificuserdetails;
};

// Logic for deleting a user by id
const deleteuserdetails = async (id) => {
    const deleteuserdata = await userModels.findByIdAndDelete(id);
    if (!deleteuserdata) {
        throw new Error("User not found");
    }
    return deleteuserdata;
};

// Logic for updating a user
const updateuserdetails = async (id, body) => {
    const updateuserid = await userModels.findById(id);
    if (!updateuserid) {
        throw new Error("No user to be updated");
    }
    // Hash the password if it's being updated
    if (body.password) {
        body.password = await bcrypt.hash(body.password, 10);
    }
    const updateuserids = await userModels.findByIdAndUpdate(id, body, { new: true });
    return updateuserids;
};

module.exports = {
    Userdetails,
    getalluser,
    getspecificuser,
    deleteuserdetails,
    updateuserdetails,
};
