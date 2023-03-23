import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Newpost from './components/Newpost';
import About from './components/About';
import Missing from './components/Missing';
import PostPage from './components/PostPage';
import Footer from './components/Footer';
import { Routes, Route,useNavigate } from "react-router-dom";
import { useState } from 'react';
import { format } from 'date-fns';

function App() {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate()
 
  
  //submit handler
  const handleSubmit = (e)=>{
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost ={id, title:postTitle, datetime, body:postBody};
    const allPosts =[...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('');
      
    }
   
    //delete post handler
  const handlePostDelete = (id)=>{
    const deletePost = posts.filter((post)=>post.id !== id)
    setPosts(deletePost);
    navigate.push("/")
  } 
  return (
    <div className='App'>
     <Nav search={search} setSearch={setSearch}/>
     <Routes>
      <Route index path="/" element={<Home  
        posts={posts.filter((post)=>
         ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()) 
        ).reverse()}/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/post" element={<Newpost 
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}
          handleSubmit={handleSubmit}
          
        />}/>
      <Route path="/post/:id" element={<PostPage posts={posts} handlePostDelete={handlePostDelete}/>}/>
      <Route path="*" element ={<Missing/>} />
     </Routes>
     <Footer />
     </div>
  );
}

export default App;
