const express = require('express')
const router = express.Router()
const userController = require("../controller/controller")

router.route("/register").post(userController.createUserDetails)


module.exports = router;