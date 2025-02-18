import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CloudCog, Home, Menu, Phone, MessageSquare } from 'lucide-react'
import devdhani from '../../assets/image/devdhani3.jpg'
import './Navbar.css'
const Navbar = () => {
   const displayRef = useRef()
   const navRef = useRef()
const handleDisplay = ()=>{
    navRef.current.classList.toggle("nav-link")
}
  return (
    <header className='header'>
        <nav className="navbar">
        <div>
            <img className='devimg' src={devdhani} alt="" />
            </div>
        <ul ref={navRef} className="nav-links">
        <li  className='ulLink'>
            <NavLink  className={({ isActive }) => isActive ? "navlink" : "inactive"}
            to= '/'
             >
              <div className='divdf'>
              <Home/>
              <div className="toggle">
              HOME
              </div>
              </div>
            </NavLink>
          </li>
          <li className='ulLink'>
            <NavLink    className={({ isActive }) => isActive ? "navlink" : "inactive"}
            to='menu'>
              <div className='divdf'>
              <Menu/>
              <div className="toggle">
              MENU
              </div>
              </div>
            </NavLink>
          </li>
          <li className='ulLink'>
            <NavLink   className={({ isActive }) => isActive ? "navlink" : "inactive"}
            to='contact'>
              <div className='divdf'>
                <Phone/>
                <div className="toggle">
              CONTACT US
              </div>
              </div>
            </NavLink>
          </li>
          <li className='ulLink'>
            <NavLink   className={({ isActive }) => isActive ? "navlink" : "inactive"}
            to= 'review'> 
            <div className='divdf'>
              <MessageSquare/>
            <div className="toggle">
              REVIEWS
              </div>
              </div>
            </NavLink>
          </li>
        </ul>
        {/* <div onClick={handleDisplay} className="logcontainer">
          <Menu/>
        </div> */}
      </nav>
      
    </header>
  )
}

export default Navbar