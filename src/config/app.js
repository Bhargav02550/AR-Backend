const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Router = require("../routes/UserRoute");
const env = require('dotenv');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

env.config({path:'./.env'});
app.use(cors());
app.use("/", Router);
// app.use('/users-list',Router);
mongoose
  .connect(
    process.env.mongodb_url
  )
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(process.env.port, () => {
      console.log("server running on port " + process.env.port);
    })
  })
  .catch((err) => console.log(err));
