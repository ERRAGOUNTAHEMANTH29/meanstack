// const productModel = require("../Models/productmodel");
// const createproducts = async(body)=>{
//     // const createdata = new Date();
//     // const productdata = {
//     //     createddate :createdata,
//     // };
// const createproduct = await productModel.create({body});
// return createproduct;
// };
// const getallproductdata = async(page)=>{
//     const productdatas = await productModel.aggregate([
//         {$skip : page * 5},
//         {$limit: 5}
//     ])
//     return productdatas;

// };
// const getallascendingorderdata = async()=>{
//     const ascendingorderdatas = await productModel.aggregate([
//        {$sort:{price:1}}
//     ])
//     return ascendingorderdatas;
// }

// module.exports={
//     createproducts,
//     getallproductdata,getallascendingorderdata,
// };
const productModel = require("../Models/productmodel");






const createProducts = async (body) => {
    try {
        const createProduct = await productModel.create(body);
        return createProduct;
    } catch (error) {
        throw new Error("Error creating product");
    }
};

const getAllProductData = async (page) => {
    try {
        const productDatas = await productModel.aggregate([
            { $skip: page * 5 },
            { $limit: 5 }
        ]);
        return productDatas;
    } catch (error) {
        throw new Error("Error fetching products");
    }
};

const getAllAscendingOrderData = async () => {
    try {
        const ascendingOrderDatas = await productModel.aggregate([
            { $sort: { price: 1 } }
        ]);
        return ascendingOrderDatas;
    } catch (error) {
        throw new Error("Error fetching products in ascending order");
    }
};

module.exports = {
    createProducts,
    getAllProductData,
    getAllAscendingOrderData,
};
