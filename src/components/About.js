import React from 'react'
import logo from '../img/logo_img.png'

function About() {
  return (
    <div className='about-container'>
        <img src={logo} alt='about-log' className='about_img'></img>
        <div className='about-info'>
            <h1>About</h1>
            <p>If you don't believe it or don't get it, I don't have the time to try to convince you, sorry.
It might make sense just to get some in case it catches on. - Satoshi Nakamoto</p>
        </div>
    </div>
  )
}

export default About