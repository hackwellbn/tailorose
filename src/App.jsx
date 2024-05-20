import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Pages/AboutPage/Aboutpage";
import "./App.css";
import ContactPage from "./Pages/ContactPage/ContactPage";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/AboutUs" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
