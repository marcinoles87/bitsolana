import React from 'react'
import '../App.css'
import contactLogo from '../img/contact.png'

function Contact() {
  return (
    <div className='contact-container'>
      
      <h1>Contact</h1>
      <img src={contactLogo} alt='contact-logo'></img>

      <div className='contact-link'>

        <i class="fa-brands fa-twitter fa-2xl"></i>
        <i class="fa-brands fa-telegram fa-2xl"></i>
        <i class="fa-brands fa-twitter fa-2xl"></i>
        <i class="fa-brands fa-telegram fa-2xl"></i>
      </div>
      
      <div className='contact-text'>
            <p>The People's Bitcoin coin has no association with Bitcoin of Satoshi's. This token is simply paying homage to a meme we all love and recognize.</p>
            <p>The People's Bitcoin is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.</p>
        </div>
    </div>
  )
}

export default Contact