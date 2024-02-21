import React from 'react'
import '../App.css'
import logo from '../img/logo_img.png'

function Roadmap() {
  return (
    <div className='roadmap-container'>
        <h1>RoadMap</h1>
        <div className='roadmap-info'>
            <img src={logo} alt='roadmap-logo'></img>
            <div className='roadmap-info2'>
            <p>Phase 1: The People's Bitcoin<br/>
                Phase 2: Vibe and HODL<br/>
                Phase 3: Flip Bitcoin</p>

                </div>
        </div>
    </div>
  )
}

export default Roadmap