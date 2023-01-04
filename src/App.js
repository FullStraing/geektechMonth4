import React, { useState} from 'react'
import MainList from './components/MainList';
import MainForm from './components/MainForm';
import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'javaScript', desc: 'Descrip'},
    {id: 2, title:'javaScript 2', desc: 'Descrip 2'},
  ])

  const createNewPost=(newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post)=> {
    setPosts(posts.filter(p=> p.id !== post.id))
  }
  return (
    <div className="App">
      <MainList remove={removePost} posts={posts}/>
      <MainForm  create={createNewPost}/>
    </div>
  );
}

export default App
