const orderservices=require("../services/orderservices")

const createOrderDetails=async(req,res)=>{
    const orderdetails = await orderservices.createOrderDetails(req.body)
    req.send(orderdetails)
}
const getuserorder=async(req,res)=>{
    const getorder = await orderservices.getuserorder(req.params.id)
    req.send(getorder)
}
module.exports={
    createOrderDetails,
    getuserorder
}