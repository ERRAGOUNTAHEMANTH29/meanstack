const express = require("express");
const sendOTPController = require("../controller/nodemailercontroller");

const router = express.Router();

router.route("/send-otp/toperson").post(sendOTPController.sendOTPController);

module.exports = router;
