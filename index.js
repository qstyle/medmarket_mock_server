const express = require("express");
const dotenv = require('dotenv').config()

const user = require("./routes/user");
const mainPageBanner = require("./routes/mainPageBanner");
const aboutUs = require('./routes/aboutUs')

const app = express();
app.use(express.json());


app.use(function (_, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use("/user", user);
app.use("/mainPageBanner", mainPageBanner);
app.use("/aboutUs", aboutUs)

const port  = 9001 ;
app.listen(port);
