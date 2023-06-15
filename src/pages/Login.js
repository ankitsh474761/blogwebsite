import React from 'react'
import {auth, provider} from "../firebase"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"

const Login = ({setIsAuth}) => {

  let navigate = useNavigate();

 

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='loginPage'>
      <p>Sign In With Google to Continue</p>
      <button onClick={signInWithGoogle} className='login-with-google-btn'> Sign in With Google</button>

      </div>
  )
}

export default Login