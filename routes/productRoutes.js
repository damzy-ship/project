const router = require("express").Router();
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");

router.route("/top-products").get(productController.getTopProducts);

router
    .route("/myproducts/:id")
    .get(authController.verifyTokenAndAuthorization, authController.verifyTokenAndSeller, productController.getMyProducts)
    .post(authController.verifyTokenAndAuthorization, authController.verifyTokenAndSeller, productController.postMyProduct)

router
    .route("/user/:id/product/:prodId/image")
    .patch(authController.verifyTokenAndAuthorization, authController.verifyTokenAndSeller, productController.deleteProductImage);


router
    .route("/user/:id/product/:prodId")
    .patch(authController.verifyTokenAndAuthorization,
        authController.verifyTokenAndSeller,
        productController.uploadProductImages,
        productController.resizeProductImages,
        productController.deployProductImages,
        productController.updateProduct
    );


router.route("/:prodId").get(productController.getProduct)



router.route("/").get(productController.getAllProduct).post(authController.verifyTokenAndAdmin, productController.createProduct);


module.exports = router