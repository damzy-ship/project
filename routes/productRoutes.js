const router = require("express").Router();
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");

router.route("/top-products").get(productController.aliasTopProducts, productController.getAllProduct)

router.route("/myproducts/:id").post(authController.verifyTokenAndSeller, productController.postMyProduct)

router.route("/:prodId").get(productController.getProduct)

router.route("/").get(productController.getAllProduct).post(authController.verifyTokenAndAdmin, productController.createProduct);


module.exports = router