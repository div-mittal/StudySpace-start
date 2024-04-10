import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='studySpace'>
            Study Space
        </div>
        <div className='rightNav'>
            <a className='login' href="/login">Login</a>
            <a className='signUp' href='/signup'>Sign Up</a>
        </div>
    </div>
  )
}

export default Navbar