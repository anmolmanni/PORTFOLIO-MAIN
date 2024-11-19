import React from 'react'
// import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#services">Services</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar