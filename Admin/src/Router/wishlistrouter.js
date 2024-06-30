const express = require("express");
const router = express.Router();
const wishlistController = require("../controller/wishlistcontroller");
router.route("/add/wishlistdatas/").post(wishlistController.addWishlist);

module.exports = router;