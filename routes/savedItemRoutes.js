const router = require("express").Router();
const savedItemController = require("../controllers/savedItemController");
const authController = require("../controllers/authController");

router
    .route("/user/:id/product/:prodId")
    .post(authController.verifyTokenAndAuthorization, savedItemController.addSavedItem)
    .patch(authController.verifyTokenAndAuthorization, savedItemController.removeSavedItem)
    
router.route("/user/:id/").get(authController.verifyTokenAndAuthorization, savedItemController.getMySavedProducts);

router.route("/").get(authController.verifyTokenAndAdmin, savedItemController.getAllSavedProductCart)

module.exports = router