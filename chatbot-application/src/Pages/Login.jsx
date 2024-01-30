import React from 'react'
import Add from '../Images/addAvatar.png'
export default function Login() {
  return (
    <div>
      <div className="formContainer">
       <div className="formWrapper">
        <span className='logo'>Messenger ChatBot</span>
        <span  className='title'>Login</span>
        <form>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
       </div>
      </div>
    </div>
  )
}
