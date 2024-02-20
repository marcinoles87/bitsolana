import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-container'>
      <ul>
        <li><a  href='#' alt='our story'>We</a></li>
        <li><a href='#' alt='our story'>Our Mission</a></li>
        <li><a href='#' alt='our story'>Story</a></li>
        <li><a href='#' alt='our story'>Bitcoin</a></li>
      </ul>

    
    </div>
  )
}

export default Nav