import React from 'react'
import logo from '../img/logo_img.png'

function Main() {
  return (
    <div className='main-container'>
      <div className='main-info'>
        <h1>BITCOIN</h1>
        <h2> Meet the People's Bitcoin on Solana. Bitcoin, the world's leading cryptocurrency, is now available on the rising Solana blockchain.</h2>
        <div className='main-links'>
            <i class="fa-brands fa-twitter fa-2xl"></i>
            <i class="fa-brands fa-telegram fa-2xl"></i>
            <i class="fa-brands fa-twitter fa-2xl"></i>
            <i class="fa-brands fa-telegram fa-2xl"></i>
        </div>
        <div className='main-buttons'>
          <a href='https://raydium.io/swap/?outputCurrency=H7q9AchpSkaBt187fTBZNrCLAqW8pytTvZWrL4x7mQxg'>
          <button className='main-btn'>Buy Now</button>
          </a>

          <a href='https://dexscreener.com/solana/HM9TXiPJyAa5vHvmHiXYVWGMTSXZTiUUs22nKAdmGodK'>
             <button className='main-btn2'>Dexscreener</button>
          </a>
         
        </div>
    
      </div>

      <div className='main-logo'>
        <img src={logo} alt='logo-bounce'></img>
      </div>
      
    </div>
  )
}

export default Main