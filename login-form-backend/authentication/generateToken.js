const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const generateToken = (userId, res) => {
  console.log("userid while generate token --> ", userId);
  const token = jwt.sign({ userId }, config.ACCESS_SECERET_KEY, {
    expiresIn: "9d",
  });
  console.log("secrete jk", config.ACCESS_SECERET_KEY);
  console.log("generate token", generateToken);
  console.log("token->", token);
  res.cookie("jwt", token, {
    maxAge: 9 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
  return token;
};
module.exports = generateToken;
