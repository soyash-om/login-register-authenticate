const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const LoginUser = require("../models/userLoginModel");

const authVerifyToken = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - token not provided" });
  }

  try {
    // const token = req.headers["Authorization"];

    console.log("verify auth token ----->", token);

    const verifyAuth = jwt.verify(token, config.ACCESS_SECERET_KEY);
    console.log("verify auth ===> ", verifyAuth);
    if (!verifyAuth) {
      return res.status(400).json({ message: "not a verified user" });
    }
    console.log(
      "verifyAuth.userId ------------------------------------------------>",
      verifyAuth.userId
    );
    const user = await LoginUser.findOne({
      where: verifyAuth.userId,
    });
    if (!user) {
      console.log("no user found");
      return;
    }
    res.user = user;
    next();
  } catch (error) {
    console.log("token expired");
    res.clearCookie("jwt");
    res.status(401).json({ redirect: "/login", message: "token expired" });
  }
};
module.exports = authVerifyToken;
