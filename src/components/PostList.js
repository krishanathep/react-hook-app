import React from "react";

export default function PostList({ posts, user }) {
  return (
    <div>
      {posts.map((post, i) => (
        <div key={i}>
          <img
            style={{ height: 100, widows: 200, objectFit: "cover" }}
            src={URL.createObjectURL(post.image)}
            alt=""
          />
          <p>{post.content}</p>
          <div>{user}</div>
        </div>
      ))}
    </div>
  );
}
