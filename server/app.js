const express = require("express");
const cors = require("cors");

// import routes
const homeRouter = require("./routes/index");

// init app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// REST endpoints
app.use("/", homeRouter);

module.exports = app;