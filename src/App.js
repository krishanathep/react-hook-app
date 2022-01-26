import { useState } from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'

function App() {
  const [user, setUser] = useState('Kwang')
  const [posts, setPosts] = useState([]) 

  if (!user) {
    return <Login setUser={setUser}/>
  }

  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} posts={posts} setPosts={setPosts} />
      {posts.map(post=>(
        <>
        <img style={{ height: 100, widows: 200, objectFit: 'cover'}} src={URL.createObjectURL(post.image)} alt="" />
        <p>{post.content}</p>
        <div>
          {user}
        </div>
        </>
      ))}
    </div>
  );
}

export default App;
