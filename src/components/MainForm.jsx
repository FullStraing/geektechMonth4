import React, {useState} from 'react';
import Button from './UI/Button';
import Input from './UI/Input'


const MainForm = ({create}) => {

    const [post, setPost] = useState({title:'', desc:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        } 
    create(newPost)
    setPost({title:'', desc:''})
  }
   return(
    <form>
        <Input onChange={e=> setPost({...post, title: e.target.value})} value={post.title} type='text' placeholder='Название поста'></Input>
        <Input onChange={e=> setPost({...post, desc: e.target.value})} value={post.desc} type='text' placeholder='Описание поста'></Input>
        <Button onClick={addNewPost}>Добавить</Button>
    </form>
   )
};

export default MainForm;