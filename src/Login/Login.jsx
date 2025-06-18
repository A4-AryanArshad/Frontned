import React from 'react'
import Header from '../Home/Header'
import "./Login.css";

const Login = () => {
  return (
    <>
    <div id="upperheader">
    <Header/>



<div id="uuy">
       <div id="form">
        <h2>Login</h2>
        <div id="ineerf">
            <span>Email:</span>
            <input type="email" ></input>
        </div>
        <div id="ineerf">
            <span>Password:</span>
            <input type="text" ></input>
        </div>
      
      
        <button>Login</button>

       </div>
        </div>
        </div>
    </>

  )
}

export default Login