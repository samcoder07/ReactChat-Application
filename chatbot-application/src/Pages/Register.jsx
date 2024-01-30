import React, { useState } from 'react'
import Add from '../Images/addAvatar.png'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth,db,storage} from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';
const Register = () => {
  const [err,setErr]=useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];

    try {
      const res= await createUserWithEmailAndPassword(auth, email, password);  
const storage = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storage, file);
uploadTask.on(
  (error) => {
   setErr(true)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
         displayName,
         photoURL:downloadURL,
      });
      await setDoc(doc(db,"users",res.user.uid),{
        displayName,email,photoURL:downloadURL,uid:res.user.uid,  
      });
      await setDoc(doc(db,"userChats",res.user.uid),{});
    });
  }
);  

} catch (err) {
  setErr(true);
    }
 
  }
  return (
    <div>
      <div className="formContainer">
       <div className="formWrapper">
        <span className='logo'>Messenger ChatBot</span>
        <span  className='title'>Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='displayName' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input type="file" id='file' style={{display:'none'}}/>
            <label htmlFor="file">
             <img src={Add} alt="" />
             <span>Add an Avatar</span>
            </label>
            <button>Sign Up</button>
            {
              err && <span>Something Went Wrong</span>
            }
        </form>
        <p>You do have an account? Login</p>
       </div>
      </div>
    </div>
  )
  }

  export default Register
