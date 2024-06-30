
const ordermodel = require("../Models/ordermodel")

const createOrderDatas = async(body)=>{
    const createorder =await ordermodel.create(body)
    return createorder;
}



const getuserorders = async(id)=>{
    const orderdetails =await registermodel.aggregate([
        {
            $match:{
                _id:id,
            }
        },{
        $lookup:{
            from:"orders",
            localField:"_id",
            foreginField:"userID",
            as:"orderdata"
        }},
        {
            $project:{
                _id:0,
                name:1,
                rollno:1,
                id:1,
                mobile:1,
        email:1,
        productData:1
            }
        }
    ]);
    return orderdetails;
};
module.exports = {
    createOrderDatas ,
    getuserorders,};