import React from 'react'
import logo from '../img/logo_img.png'

function Main() {
  return (
    <div className='main-container'>
      <div className='main-info'>
        <h1>BITCOIN</h1>
        <h2> Meet the People's Bitcoin on Solana. Bitcoin, the world's leading cryptocurrency, is now available on the rising Solana blockchain.</h2>
      </div>

      <div className='main-logo'>
        <img src={logo} alt='logo-bounce'></img>
      </div>
      
    </div>
  )
}

export default Main