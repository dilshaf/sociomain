import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      
        
        <Link to='/register' className='reg'>Register</Link>

        <h1 className='head'>HOME PAGE</h1>
        <Link to='/login' className='reg'>Login</Link>





    </div>
  )
}

export default Navbar