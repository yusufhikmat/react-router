import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars , FaRegWindowClose} from "react-icons/fa";


const Nav = ({search, setSearch}) => {
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
    <div className='navbar'>
    <nav>
      <div className='nav-icon'>
        <Link className='nav-list'><FaBars /></Link>
        <Link className='nav-list'><FaRegWindowClose /></Link>
      </div>
      <ul className='nav-ul'>
        <li><Link className='nav-list' to="/">Home</Link></li>
        <li><Link className='nav-list' to="/about">About</Link></li>
        <li><Link className='nav-list' to="/post">Post</Link></li>
      </ul>
    </nav>
    <div>
      <form className='search' onSubmit={handleSubmit}>
      <label htmlFor='search'>Search Input</label>
        <input 
                type="text" 
                id="search"
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                placeholder = "Search post"
        />
      </form>
    </div>
    </div>
  )
}

export default Nav