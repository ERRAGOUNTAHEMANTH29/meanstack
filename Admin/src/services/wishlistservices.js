const wishlistModel = require("../Models/wishlistmodels");

const addWishlist = async (data) => {
  const createwishlistData = await wishlistModel.create(data);
  return createwishlistData;
};
module.exports = {
  addWishlist,
};
