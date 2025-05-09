const LoginUser = require("../models/userLoginModel");
const User = require("../models/userRegisterModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const generateToken = require("../authentication/generateToken");
const authVerifyToken = require("../authentication/verifyAuth");
const router = require("../Routes/loginRegisterRoutes");

exports.userRegistration = async (req, res) => {
  console.log("CASE 1---->");
  try {
    const { name, email, mobileNumber, userId, password } = req.body;

    const bcryptPasswd = await bcrypt.hash(password, 10);

    const getUser = await LoginUser.findOne({ where: { userId } });

    if (getUser) {
      console.error("already exist user");
      return;
    }
    await User.create({ name, email, mobileNumber });
    await LoginUser.create({ userId, password: bcryptPasswd });
    console.log("register Success -->");
    res.status(200).json({ redirect: "/login", message: "login" });
  } catch (error) {
    console.log("error  ---- > ", error);
    res.status(400).json({ message: "Error register" }, error);
  }
};

exports.userLogin = async (req, res) => {
  const { userId, password } = req.query;

  console.log("userId ----->", userId, "password ----> ", password);
  try {
    let userRegistered = await LoginUser.findOne({ where: { userId } });

    if (!userRegistered) {
      console.log("User does not exist");
      // return;
      return res.status(404).json({ message: "User does not exist" });
    }
    console.log("Case jwt check-- >");
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userRegistered.password
    );
    if (userId !== userRegistered.userId || !isPasswordCorrect) {
      console.log("not corrected inputs");
      return res.status(404).json({ message: "not found" });
    }
    console.log("send cookie token");
    generateToken({ userId: userRegistered.userId }, res);
    // authVerifyToken();
    // res.status(200).json({ userId: userRegistered.userId });
    return res.status(200).json({
      message: "Login successful", 
      userId: userRegistered.userId,
    });
  } catch (error) {
    res.status(400).send({ message: "error " });
  }
};

exports.userLogout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ redirect: "/", message: "logged out" });
  } catch (err) {
    console.log("Error while logout", err);
  }
};
