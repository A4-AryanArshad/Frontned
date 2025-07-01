import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Home/Header';
import Footer2 from '../Home/Footer2';



const Signup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://cbackend-lilac.vercel.app/api/signup', {  // change port/path if needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup successful!');
        navigate('/login');
        // redirect or clear form
      } else {
        alert(data.message || 'Signup failed!');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <>
      <div id="upperheader">
        <Header />

        <div id="uuy">
          <form id="form" onSubmit={handleSubmit}>
            <h2>SignUp</h2>

            <div id="ineerf">
              <span>First Name :</span>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>

            <div id="ineerf">
              <span>Last Name :</span>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div id="ineerf">
              <span>Email :</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div id="ineerf">
              <span>Password :</span>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <Footer2/>
    </>
  );
};

export default Signup;
