const express = require("express");
const router = express.Router();
const { getPost, createPost, removePost, updatePost } = require('../controllers/posts')
const Posts = require("../models/posts");

router.get("/posts", getPost);
router.post("/posts", createPost);
router.delete("/posts/:id", removePost);
router.patch("/posts/:id", updatePost);

module.exports = router;
