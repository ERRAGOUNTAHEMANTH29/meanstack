// const userservice = require("../services/userservice");

// //data creation 
// const Userdetails = async(req,res)=>{
//     console.log(req.body);
//     const Userdata = await userservice.Userdetails(req.body);
//     res.send(Userdata);
// };

// const getalluser = async(req,res)=>{
//     console.log(req.body);
//     const alluserdata = await userservice.getalluser(req.body);
//     res.send(alluserdata);
// };

// const getspecificuser = async(req,res)=>{
//     console.log(req.body);
// const getspecificuserdetails = await userservice.getspecificuser(req.params.id);
// res.send(getspecificuserdetails);
// };

// const deleteuserdetails = async(req,res)=>{
//     console.log(req.body);
//     const deleteuserdetailss = await userservice.deleteuserdetails(req.params.id);
//     res.send(deleteuserdetailss);
// }

// const updateuserdetails = async(req,res)=>{
//     console.log(req.body);
//     const updateuserdetails = await userservice.updateuserdetails(req.params.id,req.body);
//     res.send(updateuserdetails);
// }
   


// module.exports={Userdetails,getalluser,
//     getspecificuser,deleteuserdetails,updateuserdetails,

// };
const userservice = require("../services/userservice");

// Data creation
const Userdetails = async (req, res) => {
    try {
        const Userdata = await userservice.Userdetails(req.body);
        res.status(201).json(Userdata);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getalluser = async (req, res) => {
    try {
        const alluserdata = await userservice.getalluser();
        res.status(200).json(alluserdata);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getspecificuser = async (req, res) => {
    try {
        const getspecificuserdetails = await userservice.getspecificuser(req.params.id);
        if (!getspecificuserdetails) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json(getspecificuserdetails);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteuserdetails = async (req, res) => {
    try {
        const deleteuserdetailss = await userservice.deleteuserdetails(req.params.id);
        res.status(200).json(deleteuserdetailss);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
};

const updateuserdetails = async (req, res) => {
    try {
        const updateuserdetails = await userservice.updateuserdetails(req.params.id, req.body);
        res.status(200).json(updateuserdetails);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    Userdetails,
    getalluser,
    getspecificuser,
    deleteuserdetails,
    updateuserdetails,
};
