import React, { useEffect, useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost";
import ShowPosts from "./components/ShowPosts";

function App() {
  let [posts, setPosts] = useState([]);

  const getPosts = async () => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <AddPost posts={posts} setPosts={setPosts} />

      <ShowPosts posts={posts} />

     
    </div>
  );
}

export default App;
