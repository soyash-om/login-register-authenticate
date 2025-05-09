const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const generateToken = (userId, res) => {
  console.log("userid while generate token --> ", userId);
  const token = jwt.sign({ userId }, config.ACCESS_SECERET_KEY, {
    expiresIn: "1m",
  });
  console.log("secrete jk", config.ACCESS_SECERET_KEY);
  console.log("generate token", generateToken);
  console.log("token->", token);
  res.cookie("jwt", token);
  // res.json({token});
  return token;
};
module.exports = generateToken;
