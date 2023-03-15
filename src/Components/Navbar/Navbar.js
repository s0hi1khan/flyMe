import React from 'react'
import { useState } from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenu} from 'react-icons/cg'
import logo from '../../Assets/images/logo.png'

const Navbar = () => {
  const [active, setActive] = useState('navBarMenu')
  const showNavBar=()=>{
    setActive("navBarMenu showNavBar")
  }
  const removeNavBar=()=>{
    setActive("navBarMenu")
  }
// bg add to second navbar
  const [noBg, addBg] = useState('navBarTwo')
  const addBgColor=()=>{
    if(window.scrollY >= 10)
      addBg("navBarTwo navbar_with_bg")
    else{
      addBg('navBarTwo')
    }
  }
  window.addEventListener('scroll',addBgColor)

  return (
    <div className='navbar flex'>
        <div className="navBarOne flex">
          <div> 
            <SiConsul className='icon'/>
          </div>
          <div className="none flex">
            <li className='flex icon'><BsPhoneVibrate/>Support</li>
            <li className='flex icon'><AiOutlineGlobal/>Languages</li>
          </div>
          <div className="atb flex">
            <span>Sign In</span>
            <span>Sign Out</span>
          </div>
        </div>
        <div className={noBg}>
          <div className="logoDiv">
            <img src={logo} alt="flyMe" className='logo' />
          </div>
          <div className={active}>
            <ul className="menu flex">
              <li onClick={removeNavBar} className="listItem">Home</li>
              <li onClick={removeNavBar} className="listItem">About</li>
              <li onClick={removeNavBar} className="listItem">Offers</li>
              <li onClick={removeNavBar} className="listItem">Seats</li>
              <li onClick={removeNavBar} className="listItem">Destinations</li>
            </ul>
            <button className='btn flex btnOne'>Contact</button>
          </div>
          {/* <button class Name='btn flex btnTwo'>Contact</button> */} 
          <div onClick={showNavBar} className="toggleIcon">
            <CgMenu className='icon'/>
          </div>
        </div>
    </div>
  )
}

export default Navbar
