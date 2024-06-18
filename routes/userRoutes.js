const express = require("express");
const router = express.Router();
const users = require("../controllers/userController")
router.post("/register", users.registerController);
router.post("/login", users.loginController);
router.post("/forgetPassword", users.forgetPassword);
router.post("/resetPassword", users.resetPassword);
module.exports = router