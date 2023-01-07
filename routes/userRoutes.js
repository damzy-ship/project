const router = require("express").Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router
    .route("/:id")
    .get(authController.verifyTokenAndAuthorization, userController.getMyAccount)
    .patch(authController.verifyTokenAndAuthorization, userController.updateMyAccount);

router
    .route("/")
    .get(authController.verifyTokenAndAdmin, userController.getAllUser)
    .post(authController.verifyTokenAndAdmin, userController.createUser)
    .delete(authController.verifyTokenAndAdmin, userController.deleteUserAccount);


module.exports = router