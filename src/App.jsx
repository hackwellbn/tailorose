import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Pages/AboutPage/Aboutpage";
import "./App.css";
import ContactPage from "./Pages/ContactPage/ContactPage";
import LoginPage from "./Components/Authentication/SignUp/SignUpPage";
import SignUpPage from "./Components/Authentication/SignUp/SignUpPage";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/AboutUs" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
