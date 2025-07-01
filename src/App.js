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
import Blog2 from "./Blog2/Blog2";
import Dashboard from "./Dashboard/Dashboard";
import NewsDashboard from "./NewsDashboard/NewsDashboard";
import BlogDashboard from "./BlogDashboard/BlogDashboard";
import AdminRoute from "./AdminRoute";
import NewsDetails from "./Blog2/NewsDetails";
import BlogDetails from "./Blog2/BlogDetails";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Only renders homepage content */}
        <Route path="/login" element={<Login />} />
        <Route path="/trade" element={<Trading/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/news" element={<Blog2/>} />
        <Route path="/pricing" element={<Plan/>} />
        <Route path="/signup" element={<Signup/>}  />
  
        <Route path="/news/:id" element={<NewsDetails/>} />
        <Route path="/blogs/:id" element={<BlogDetails/>} />
         {/* ✅ Admin-only routes */}
         <Route path="/Articles" element={
          <AdminRoute><Dashboard /></AdminRoute>
        } />
        <Route path="/Add News" element={
          <AdminRoute><NewsDashboard /></AdminRoute>
        } />
        <Route path="/Add Blog" element={
          <AdminRoute><BlogDashboard /></AdminRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
