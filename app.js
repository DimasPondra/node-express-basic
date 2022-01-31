const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());

// Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

// Connect to DB
mongoose.connect("mongodb://localhost:27017/basic", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(() => console.log("Database connected"))
.catch(err => console.log(err));

// How to we start listening to the server
app.listen(3000);
