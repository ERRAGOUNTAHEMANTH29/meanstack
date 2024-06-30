const express=require('express')
const router =express.Router()
const ordercontroller=require("../controller/ordercontroller")

router.route("/add/order/data").post(ordercontroller.createOrderDetails)

router.route("/get/orderlist/byid/:id").get(ordercontroller.getuserorder)

module.exports=router;