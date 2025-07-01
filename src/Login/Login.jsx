import React, { useState } from 'react';
import Header from '../Home/Header';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import Footer2 from '../Home/Footer2';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {


      const res = await fetch('https://cbackend-lilac.vercel.app/api/login', {
        method: 'POST',
        credentials: 'include', // important for cookies
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {


        if (formData.email === "admin1234@gmail.com" && formData.password === "admin1234") {
          alert("Admin login successful!");
          localStorage.setItem("isAdmin", "true")
          navigate('/Articles');
        }else{
          localStorage.setItem("isAdmin", "false");
        alert('Login successful!');
        // redirect to dashboard or home
        navigate('/');
        }
      } else {
        alert(data.message || 'Login failed!');
      }

    } catch (err) {
      console.error(err);
      alert('Error logging in.');
    }
  };

  return (
    <>
      <div id="upperheader">
        <Header />
        <div id="uuy">
          <form id="form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div id="ineerf">
              <span>Email:</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div id="ineerf">
              <span>Password:</span>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <Footer2/>
    </>
  );
};

export default Login;
