import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

const Header = ({title, width}) => {
  return (
    <div  className='header'>
    <h2>{title}</h2>
    {width < 768 ? <FaMobileAlt />
    : width < 992 ? <FaTabletAlt/>
    : <FaLaptop /> }
    </div>
  )
}

export default Header