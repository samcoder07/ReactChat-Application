import React from 'react'
import Avatars from '../Images/avatars.png'
const Message = () => {
  return (
    <div className='message owner'>
    <div className="messageInfo">
      <img src={Avatars} alt="" />
      <span>just now</span>
    </div>
    <div className="messageContent">
      <p>hello</p>
      <img src={Avatars} alt="" />
    </div>
    </div>
  )
}

export default Message
