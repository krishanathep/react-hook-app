import { useState, useRef } from "react";

export default function CreatePost({ user, posts, setPosts }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = { content, image, user };
    const newPost = [post, ...posts];
    setPosts(newPost);

    setContent("");
    imageInputRef.current.value = "";
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setContent(event.target.value)}
          type="text"
          placeholder="Add Post Content"
          value={content}
        />{' '}
        <input
          onChange={(event) => setImage(event.target.files[0])}
          type="file"
          ref={imageInputRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
