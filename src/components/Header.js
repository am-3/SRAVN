import React from 'react'
import '../styles/header.css'
import { NavLink, Link } from 'react-router-dom'
import Hamburger from './Hamburger'
export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="heading-cont">
          <h1 className=""><Link to="/" end = "true">SRAVN</Link></h1>
        </div>
          {/* Menu Button */}
          <Hamburger/>
          <nav className='navbar-nav'>
            <ul className="navlist">
              <li><NavLink to="/" end = "true" className={({ isActive }) => isActive ? 'activate' : null}><span>Home</span></NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? 'activate' : null}><span>About</span></NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'activate' : null}><span>Contact</span></NavLink></li>
            </ul>
          </nav>

      </div>
    </>
  )
}
