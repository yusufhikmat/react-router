
import Nav from './components/Nav';
import Home from './components/Home';
import Newpost from './components/Newpost';
import About from './components/About';
import Missing from './components/Missing';
import PostPage from './components/PostPage';
import Footer from './components/Footer';
import EditPosts from './components/EditPosts';
import { Routes, Route,useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';
import Header from './components/Header';
import useWindowSize from './hooks/useWindowSize';


function App() {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const {width} = useWindowSize()
 
  useEffect(()=>{
    const fetchPosts = async ()=>{
      try{
        const response = await api.get('/posts');
        setPosts(response.data)
      }catch(err){
        console.log(err.msg) 
      }
    }
    fetchPosts()
  },[])
  //submit handler
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost ={id, title:postTitle, datetime, body:postBody};
    try{
      const response = await api.post('/posts', newPost)
      const allPosts =[...posts, response.data]
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
    }catch(err){
      console.log(err.msg)
    }}
    
    //edit post handler
      const handleEdit = async (id)=>{
      const datetime = format(new Date(), 'MMMM dd, yyyy pp')
      const updatedPost ={id, title:postTitle, datetime, body:postBody};
      try{
        const response = await api.put(`/posts/${id}`, updatedPost)
        setPosts(posts.map((post)=>post.id === id ? {...response.data} : post))
        setEditTitle('')
        setEditBody('')
      }catch(err){
        console.log(err.msg)
      }
    }
   
    //delete post handler
  const handlePostDelete = async(id)=>{
    try{
    await api.delete(`./posts/${id}`)
    const deletePost = posts.filter((post)=>post.id !== id)
    setPosts(deletePost);
    navigate.push("/")
  } catch(err){
    console.log(err.msg)
  }
}
  return (
    <>
    <Header title="React-Router" width={width}/>
     <Nav search={search} setSearch={setSearch}/>
     <Routes>
      <Route index path="/" element={<Home  
        posts={posts.filter((post)=>
         ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()) 
        ).reverse()}/>}/>

      <Route path="/about" element={<About />} />
      <Route path="/post" 
          element={<Newpost 
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}
          handleSubmit={handleSubmit}
          
        />}/>
      <Route path="/post/:id" 
          element={<PostPage posts={posts} 
          handlePostDelete={handlePostDelete}/>}/>
      <Route path="/edit/:id"
          element={<EditPosts 
          posts={posts} 
          handleEdit={handleEdit} 
          setEditTitle={setEditTitle}
          setEditBody={setEditBody}
          editBody={editBody}
          editTitle={editTitle}
          />} />
      <Route path="*" element ={<Missing/>} />
     </Routes>
     <Footer />
     </>
  );
}

export default App;
