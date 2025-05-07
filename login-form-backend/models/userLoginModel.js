const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const LoginUser = sequelize.define("LoginUser", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
sequelize
  .sync()
  .then(() => console.log("synced and login table created"))
  .catch((error) => console.log("error", error));

module.exports = LoginUser;
