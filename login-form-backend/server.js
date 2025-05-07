const express = require("express");
const bodyParer = require("body-parser");
const userRoute = require("./Routes/loginRegisterRoutes");
const sequelize = require("sequelize");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3002", "http://localhost:5173"],
    // origin: "http://localhost:3002",
    credentials: true,
  })
);
app.use(bodyParer.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/findroute", userRoute);

// sequelize
//   .sync()
//   .then(() => console.log("synced"))
//   .catch((error) => console.log("error", error));

const PORT = 3002;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server Started and listen on port - ${PORT}`);
});
