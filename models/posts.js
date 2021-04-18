const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  author: String,
  body: String,
  meta: {
    likes: Number,
    comments: Number,
  },
});




const Posts = mongoose.model("posts", PostsSchema);

module.exports = Posts;
