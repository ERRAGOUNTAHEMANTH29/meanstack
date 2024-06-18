// const productService = require("../services/productService");
const productService = require("../services/productservices");
const createProductData = async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.send(product);
};
module.exports = {
  createProductData,
};
