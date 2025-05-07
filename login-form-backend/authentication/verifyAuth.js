const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const LoginUser = require("../models/userLoginModel");

const authVerifyToken = async (req, res, next) => {
  // const authHeader = req.headers["Authorization"];
  try {
    const token = req.cookies.jwt;
    console.log("verify auth token ----->", token);

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - token not provided" });
    }

    const verifyAuth = jwt.verify(token, config.ACCESS_SECERET_KEY);
    console.log("verify auth ===> ", verifyAuth);
    if (!verifyAuth) {
      return res.status(400).send({ message: "not a verified user" });
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
    console.log("can not verify");
  }
};
module.exports = authVerifyToken;
