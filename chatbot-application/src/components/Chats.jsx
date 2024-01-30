import React from 'react'
import Avatars from '../Images/avatars.png'
const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Avatars} alt="" />
        <div className="userChatInfo">
        <span>Jane</span>
        <p>hello</p>
        </div>
    </div>
      <div className="userChat">
        <img src={Avatars} alt="" />
        <div className="userChatInfo">
        <span>Jane</span>
        <p>hello</p>
        </div>
    </div>
      <div className="userChat">
        <img src={Avatars} alt="" />
        <div className="userChatInfo">
        <span>Jane</span>
        <p>hello</p>
        </div>
    </div>
    </div>
  )
}

export default Chats
