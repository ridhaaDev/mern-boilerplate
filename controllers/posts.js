const mongoose = require("mongoose");
const Posts = require("../models/posts");

exports.getPost = async (req, res) => {
  const posts = await Posts.find();
  res.send(posts);
};

exports.createPost = async (req, res) => {
  const reqBody = req.body;

  let currentPost = new Posts({
    author: reqBody.author,
    body: reqBody.body,
    met: {
      likes: 0,
      comments: 0,
    },
  });

  await currentPost.save();

  res.json(currentPost);
};

exports.removePost = async (req, res) => {
  try {
    const post = await Posts.deleteOne({ _id: req.params.id });

    res.send(post);
  } catch (error) {
    res.status(404);
    res.send({ error: "Post doesn't exist" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    console.log("Hello World");
    const post = await Posts.findOne({ _id: req.params.id });

    console.log(post, '41');

    if (req.body.author) {
      post.author = req.body.author;
    }

    if (req.body.body) {
      post.body = req.body.body;
    }

    console.log(post);

    await post.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist" });
  }
};
