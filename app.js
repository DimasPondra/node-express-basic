const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log("connected to database"));

// How to we start listening to the server
app.listen(3000);
