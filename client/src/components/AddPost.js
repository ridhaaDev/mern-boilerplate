import React, { useState } from "react";

const AddPost = ({ posts, setPosts }) => {
  let [authorName, setAuthorName] = useState("");
  let [contents, setContents] = useState("");

  const handleAuthorName = (e) => {
    setAuthorName(e.target.value)
  };

  const handleContents = (e) => {
    setContents(e.target.value)
  };

  const addPost = async (author, content) => {

    let requestOptions = {
        method: "POST",
        headers: {},
        body: {author: authorName, "body": content}
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(authorName, contents)
  };

  const handleClick = (e) => {};

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter author name..." onChange={handleAuthorName} />
      <input placeholder="What's on your mind? " onChange={handleContents} />
      <button onClick={handleClick}>Add post</button>
    </form>
  );
};

export default AddPost;
