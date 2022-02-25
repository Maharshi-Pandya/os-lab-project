const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// REST endpoints
app.get("/", (req, res) => {
    res.json({
        "message": "Wassup?"
    });
});

module.exports = app;