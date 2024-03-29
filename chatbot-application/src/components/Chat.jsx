import React from 'react'
import Cam from '../Images/cam.png';
import Add from '../Images/add.png';
import More from '../Images/more.png';
import Messages from '../components/Messages'
import Input from '../components/Input';
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat
