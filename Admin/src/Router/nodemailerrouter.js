const express = require("express");
const sendOTPController = require("../controller/nodemailercontroller");
const verifyOTPController=require("../controller/otpcontroller");

const router = express.Router();

router.route("/send-otp/toperson").post(sendOTPController.sendOTPController);


router.route('/verify-otp/ofperson').post(verifyOTPController.verifyOTP);


module.exports = router;
