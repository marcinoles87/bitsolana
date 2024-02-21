import React from 'react'
// import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo_img.png'

function Navig() {
  return (
  
       <div className='nav-container'>
         <ul className='nav-link'>
          <img src={logo} alt='logo' className='nav-logo'></img>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Tokenize</a></li>
          <li><a href='#'>How to buy</a></li>
          <li><a href='#'>Telegram</a></li>
          <li><a href='#'>Chart</a></li>
          <button className='nav-button'>BUY NOW</button>
         </ul>
       

       
       </div>

  
  )
}

export default Navig