import React from 'react'
import Header from '../Home/Header'

const Signup = () => {
  return (
    <>
    <div id="upperheader">
    <Header/>



<div id="uuy">
       <div id="form">
        <h2>SignUp</h2>
        <div id="ineerf">
            <span>First Name :</span>
            <input type="text" ></input>
        </div>
        <div id="ineerf">
            <span>Last Name :</span>
            <input type="email" ></input>
        </div>
        <div id="ineerf">
            <span>Email :</span>
            <input type="email" ></input>
        </div>
        <div id="ineerf">
            <span>Password :</span>
            <input type="text" ></input>
        </div>
      
      
        <button>Sign Up</button>

       </div>
        </div>
        </div>
    </>
  )
}

export default Signup