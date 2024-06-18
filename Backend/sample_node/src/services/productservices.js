// const productModel = require("../models/productModel");
const productModel = require("../models/productmodels");

const createProduct = async (body) => {
  const product = await productModel.create(body);
  return product;
};

module.exports = {
  createProduct,
};
