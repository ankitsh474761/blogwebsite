import './App.css';
import { Routes,Route, Link} from "react-router-dom";
import {useState } from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import {signOut} from "firebase/auth"
import {auth} from  "./firebase";



function App() {
  const [isAuth,setIsAuth] =useState(localStorage.getItem("isAuth"));



  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";   // instead of navigate
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div className="App">
      <nav>
        <Link to={"/"} >Home</Link>

        { !isAuth  ?

         <Link to={"/login"} >Login </Link> 

         : 

          <>
        <Link to={"/createpost"} >Create Post</Link>
         <button onClick={logout}>Log Out</button>
         </>

        }
        

      </nav>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>} />
      <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />

    </Routes>

    </div>
  );
}

export default App;
