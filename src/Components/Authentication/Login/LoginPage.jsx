// LoginPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Email/password login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="container">
      {" "}
      {/* Apply container class */}
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        {" "}
        {/* Apply form class */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <hr />
      <button className="google-button" onClick={handleGoogleLogin}>
        Login with Google
      </button>{" "}
      {/* Apply google-button class */}
    </div>
  );
};

export default LoginPage;
