import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Home/Header";
import Login from "./Login/Login";
import Home from "./Home/Home"; // ✅ new Home page component
import Signup from "./Signup/Signup";
import Trading from "./Trading/Trading";
import Plan from "./Plan/Plan";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Only renders homepage content */}
        <Route path="/login" element={<Login />} />
        <Route path="/trade" element={<Trading/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/plans" element={<Plan/>} />
        <Route path="/signup" element={<Signup/>}  />
      </Routes>
    </Router>
  );
}

export default App;
