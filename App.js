import React,{useState} from 'react'
import MainList from './components/MainList';
import MainForm from './components/MainForm';
import './styles/App.css'
import Input from './components/UI/Input';
import Select from './components/UI/Select';
import { usePosts } from './hooks/usePosts';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'Найти', desc: 'чтоделать'},
    {id: 2, title:'потерять', desc: 'машина'},
  ])

  const createNewPost=(newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post)=> {
    setPosts(posts.filter(p=> p.id !== post.id))
  }
  const [filter, setFilter] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  
  const sortPosts = (sort) =>{
    setSelectedSort(sort)
  }
  return (
    <div className="App">
      <MainForm  create={createNewPost}/>
      <div>
          <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Поиск..."
          />
          <Select
              value={selectedSort}
              onChange={sortPosts}
              defaultValue="Сортировка"
              options={[
                  {value: 'title', name: 'По названию'},
                  {value: 'body', name: 'По описанию'},
              ]}
          />
        </div>
      <MainList remove={removePost} posts={sortedAndSearchedPosts}/>
    </div>
  );
}

export default App
