const express = require("express");

const Post = require("../models/post.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const posts = await Post.find().lean().exec();

    return res.send(posts);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("", async (req, res) => {
  const posts = await Post.create(req.body);
  return res.send(posts);
});

module.exports = router;
