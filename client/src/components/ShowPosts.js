import React from "react";

const ShowPosts = ({posts}) => {
  return (
    <div>
      <ul>
        {posts.map((item) => (
          <div key={item._id}>
            <h2>{item.author}</h2>
            <p>{item.body}</p>

            <button>Remove</button>
            <button>Update</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShowPosts;
