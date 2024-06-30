const orderservices=require("../services/orderservices")

const createOrderDetails=async(req,res)=>{
    const orderdetails = await orderservices.createOrderDatas(req.body)
    res.send(orderdetails);
}
const getuserorder=async(req,res)=>{
    const getorder = await orderservices.getuserorders(req.params.id)
    res.send(getorder)
}
module.exports={
    createOrderDetails,
    getuserorder,
}

