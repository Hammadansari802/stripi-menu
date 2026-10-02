import React from 'react'
import logo from "./images/logo.svg"
import {FaBars} from "react-icons/fa"
import {useGlobalContext} from "./Context"

function Navbar() {
  const {OpenSidebar, OpenSubmenu , CloseSubmenu } = useGlobalContext()

  const displayMenu = (e) =>{
      const page = e.target.textContent
      const tempValue = e.target.getBoundingClientRect()
      const center = (tempValue.left + tempValue.right)/2
      const bottom = (tempValue.bottom - 3)

    OpenSubmenu(page ,{center , bottom})
  }

 const clickSubMenu = (e) =>{
    if (!e.target.classList.contains("link-btn")) {
       CloseSubmenu()
    }
     
  }
  return (
  <nav className='nav' onMouseOver={clickSubMenu}>
    <div className='nav-center'>
      <div className='nav-header'>
          <img src={logo} className='nav-logo' alt="stripe" />
          <button className='btn toggle-btn' onClick={OpenSidebar}>
              <FaBars/>
          </button>
      </div>
      
      <ul className='nav-links'>
        <li>
        <button className='link-btn' onMouseOver={displayMenu}>products</button>
        </li>
        <li>
        <button className='link-btn' onMouseOver={displayMenu}>developers</button>
        </li>
        <li>
        <button className='link-btn'onMouseOver={displayMenu}>company</button>
        </li>
      </ul>
       <button className='btn signin-btn'>Sign in</button>
    </div>
   
  </nav>
  )
}

export default Navbar
