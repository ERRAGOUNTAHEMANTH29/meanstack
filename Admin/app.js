const express = require("express");

const app = express();
const db = require("./src/database/db");

const Router = require("./src/Router/userrouter");
const productrouter =require("./src/Router/productrouter");
const Wishlistrouter =require("./src/Router/wishlistrouter");
const orderrouter = require("./src/Router/orderrouter");
const nodemailerrouter =require("./src/Router/nodemailerrouter");
const bodyParser = require("body-parser");
const jwttokens = require("./src/Router/jwttokenrouter");

app.use(bodyParser.json());
app.use("/User",Router);
app.use("/product",productrouter);
app.use("/wishlist",Wishlistrouter);
app.use("/order",orderrouter);
app.use("/nodemailer",nodemailerrouter);
app.use("/jwttokenss",jwttokens);


db.on("open", () => {
    app.listen(9000, () => {
      console.log("server is running on port 9000");
    });
  });
  db.on("error", () => {
    console.log("error while connecting to database");
  });
  