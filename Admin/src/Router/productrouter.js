const express =require("express");
const router=express.Router();
const Productcontroller = require("../controller/productcontroller");
router.route("/add/products").post(Productcontroller.productDataCreation);
router.route("/all/data/:page").get(Productcontroller.productDatas);
router.route("/all/data/ascendingorder/").get(Productcontroller.getDatasInAscending);
module.exports=router;
