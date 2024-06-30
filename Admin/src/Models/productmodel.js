const moment = require("moment");
const mongoose = require("mongoose");
// const moments = require('moment');
// const now = moment();
// console.log(now);
// console.log(now.format('YYYY-MM-DD HH:mm:ss'));
const { v4: uuidv4 } = require("uuid");
const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
  qty: {
    type: Number,
  },

  createddate:{
    type:String,
    default: moment().toDate(),
  },
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
