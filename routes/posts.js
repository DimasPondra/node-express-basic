const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const data = await post.save();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get("/:postId", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
});

router.patch("/:postId", async (req, res) => {
    const data = {
        title: req.body.title,
        description: req.body.description,
    };

    try {
        const post = await Post.updateOne({ _id: req.params.postId }, { $set: data });
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete("/:postId", async (req, res) => {
    try {
        const post = await Post.remove({ _id: req.params.postId });
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;
