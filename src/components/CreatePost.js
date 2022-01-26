import {useState} from "react";

export default function CreatePost({user, posts, setPosts}) {
    const [content, setContent]=useState('')
    const [image, setImage]=useState(null)

    function handleSubmit(event){
        event.preventDefault()
        const post = { content, image, user }
        const newPost = [post, ...posts]
        setPosts(newPost)
        console.log(posts)
    }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
          <input onChange={event => setContent(event.target.value)} type="text" placeholder="Add Post Content" />
          <input onChange={event => setImage(event.target.files[0])} type="file" />
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}
