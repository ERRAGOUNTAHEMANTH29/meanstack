// const wishlistService = require("../services/wishlistService");
const wishlistService = require("../services/wishlistservices");

const addWishlist = async (req, res) => {
  const wishlistData = await wishlistService.addWishlist(req.body);
  res.send(wishlistData);
};

module.exports = {
  addWishlist,
};
