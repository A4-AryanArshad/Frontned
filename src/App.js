import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './i18n'; // 👈 import your i18n setup

import Header from "./Home/Header";
import Login from "./Login/Login";
import Home from "./Home/Home";
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
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      {/* 🌍 Language Switcher UI */}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trade" element={<Trading />} />
        <Route path="/service" element={<Services />} />
        <Route path="/news" element={<Blog2 />} />
        <Route path="/pricing" element={<Plan />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        {/* Admin Routes */}
        <Route
          path="/Articles"
          element={<AdminRoute><Dashboard /></AdminRoute>}
        />
        <Route
          path="/Add News"
          element={<AdminRoute><NewsDashboard /></AdminRoute>}
        />
        <Route
          path="/Add Blog"
          element={<AdminRoute><BlogDashboard /></AdminRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
