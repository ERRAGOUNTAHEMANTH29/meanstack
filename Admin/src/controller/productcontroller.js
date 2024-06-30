// const productservices = require("../services/productservice");

// const productdatacreation = async(req,res)=>{
//     const productdetails = await productservices.createproducts(req.body);
//     res.send(productdetails);
// };
// const productdatas = async(req,res)=>{
//     const allproductdatas = await productservices.getallproductdata(req.params.page);
//     res.send(allproductdatas);
// };
// const getdatasinascending = async(req,res)=> {
// const ascendingorderdata = await productservices.getallascendingorderdata();
// res.send(ascendingorderdata);
// };
// module.exports={
//     productdatacreation,
//     productdatas,getdatasinascending,
// };
const productServices = require("../services/productservice");



const productDataCreation = async (req, res) => {
    try {
        const productDetails = await productServices.createProducts(req.body);
        res.status(201).json(productDetails);
    } catch (error) {
        res.status(500).json({ error: "Failed to create product" });
    }
};

const productDatas = async (req, res) => {
    const page = parseInt(req.params.page, 10);
    if (isNaN(page) || page < 0) {
        return res.status(400).json({ error: "Invalid page number" });
    }

    try {
        const allProductDatas = await productServices.getAllProductData(page);
        res.status(200).json(allProductDatas);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
};

const getDatasInAscending = async (req, res) => {
    try {
        const ascendingOrderData = await productServices.getAllAscendingOrderData();
        res.status(200).json(ascendingOrderData);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products in ascending order" });
    }
};

module.exports = {
    productDataCreation,
    productDatas,
    getDatasInAscending,
};
