import React from 'react'
// import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navig() {
  return (
  
       <div className='nav-container'>
         <ul className='nav-link'>
          <img src='/img/logo_img.png' alt='logo'></img>
          <li>About</li>
          <li>Tokenize</li>
          <li>How to buy</li>
          <li>Telegram</li>
          <li>Chart</li>
          <button className='nav-button'>BUY NOW</button>
         </ul>
       

       
       </div>

  
  )
}

export default Navig