// Import packages
const express = require("express");
const user = require("./routes/user");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/user", user);

// connection
const port = process.env.PORT || 9001;
app.listen(port);
