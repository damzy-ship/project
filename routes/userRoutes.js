const router = require("express").Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.route("/").get(authController.verifyTokenAndAdmin, userController.getAllUser).post(authController.verifyTokenAndAdmin, userController.createUser);

module.exports = router