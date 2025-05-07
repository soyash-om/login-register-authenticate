const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("loginSecurly_dbs", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

sequelize
  .authenticate()
  .then(() => console.log("Database created successfully"))
  .catch((err) => {
    console.log("Error while creating Database -", err);
  });
module.exports = sequelize;
