const express = require("express");
const router = express.Router();
const controller = require("../controllers/loginRegisterController");
const authVerifyToken = require("../authentication/verifyAuth");
const generateToken = require("../authentication/generateToken");

router.post("/register", controller.userRegistration);
router.get("/login", controller.userLogin);
router.get("/welcome", controller.userLogout);
router.get("/verify", authVerifyToken, (req, res) => {
  res.status(400);
});
module.exports = router;
