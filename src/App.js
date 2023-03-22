import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Newpost from './components/Newpost';
import About from './components/About';
import Missing from './components/Missing';
import PostPage from './components/PostPage';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import data from './asset/data/data';

function App() {
  const [search, setSearch] = useState('')
  const [posts, setPost] = useState([data])
  return (
    <>
     <Nav search={search} setSearch={setSearch}/>
     <Routes>
      <Route index path="/" element={<Home  posts={posts}/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/post" element={<Newpost />}/>
      <Route path="/post/:id" element={<PostPage />}/>
      <Route path="*" element ={<Missing/>} />
     </Routes>
     <Footer />
     </>
  );
}

export default App;
