const express = require("express");
const app = express();
const config = require("./config");
const bodyParser = require("body-parser");

// Importing all routers
//const usersRouter = require("./routes/users");

const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

app.get("/", function (req, res) {
  res.send("Welcome to App");
});

// Defining API Routes
//app.use("/users", usersRouter);

app.listen(config.port, function () {
  console.log("App running on localhost:%s", config.port);
});