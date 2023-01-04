import React,{useMemo, useState} from 'react'
import MainList from './components/MainList';
import MainForm from './components/MainForm';
import './styles/App.css'
import Input from './components/UI/Input';
import Select from './components/UI/Select';

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
  const [search, setSearch] = useState('')
  const [selectedSort, setSelectedSort] = useState('')

  const sortedPosts = useMemo(()=> {
    console.log('work');
    if(selectedSort){
      return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  },[selectedSort, posts])
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post=>post.title.toLowerCase().includes(search.toLowerCase()))
  },[search, sortedPosts])
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
