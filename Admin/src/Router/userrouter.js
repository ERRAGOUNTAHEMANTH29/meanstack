const express= require("express");
const router = express.Router();
const usercontroller = require("../controller/Usercontroller");
const { Userdetails } = require("../services/userservice");

//Creating a data 
router.route("/register/createdata").post(usercontroller.Userdetails);
 
//Getting all user details
router.route("/register/alldetails/get").get(usercontroller.getalluser);

//Getting a user by ID
router.route("/register/singledetail/:id").get(usercontroller.getspecificuser);

//Delete a user 
router.route("/delete/userdata/:id").delete(usercontroller.deleteuserdetails);

//update user
router.route("/update/userdata/:id").put(usercontroller.updateuserdetails);


 





module.exports = router;