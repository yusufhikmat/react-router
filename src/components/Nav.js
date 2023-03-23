import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars , FaRegWindowClose} from "react-icons/fa";


const Nav = ({search, setSearch}) => {
  const [toggle, setToggle] = useState(true)

  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
    <div className={toggle ? 'navbar responsive' : "navbar"}>
    <div className='nav-logo'>Router</div>
    <nav>
      <div className='nav-icon' onClick={handleToggle}>
      {toggle ? <FaBars /> : <FaRegWindowClose />}
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