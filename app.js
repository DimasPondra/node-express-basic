const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

app.get("/posts", (req, res) => {
    res.send("Welcome to posts page");
});

// How to we start listening to the server
app.listen(3000);
