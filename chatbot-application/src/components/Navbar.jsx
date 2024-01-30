import React from 'react'
import Avatars from '../Images/avatars.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Messenger ChatBot</span>
      <div className="user">
        <img src={Avatars} alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
