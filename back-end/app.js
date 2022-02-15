// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

// CONFIGURATION

const app = express();
app.use(cors());
app.use(express.json());

// MIDDLEWARE

// ROUTES
const snacksController = require("./controllers/snackController");

app.get("/", (req, res) => {
  res.status(200).send("Get Snack'n at Snack-a-log!");
});

app.use("/snacks", snacksController);

// EXPORT
module.exports = app;
