const express = require("express");
const router = express.Router();
const controller = require("../controllers/loginRegisterController");
const authVerifyToken = require("../authentication/verifyAuth");

router.post("/register", controller.userRegistration);
router.get("/login", authVerifyToken, controller.userLogin);
router.get("/logout", controller.userLogout);
module.exports = router;
