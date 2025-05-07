const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,               
  },
});
sequelize
  .sync()
  .then(() => console.log("synced and user register table created"))
  .catch((error) => console.log("error", error));

module.exports = User;
