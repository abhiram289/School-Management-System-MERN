import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  // login mode: admin OR student
  const [mode, setMode] = useState("admin");

  // input fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    if (mode === "admin") {
      if (username === "admin" && password === "sunrise@123") {
        localStorage.setItem("role", "admin");
        window.location.href = "/";
        return;
      }
      alert("Invalid admin credentials");
      return;
    }

    
    if (mode === "student") {
      const roll = username.trim();
      const expectedPassword = `student@${roll}`;

      if (password === expectedPassword) {
        localStorage.setItem("role", "student");
        localStorage.setItem("studentRoll", roll);
        window.location.href = "/student-dashboard";
        return;
      }
      alert("Invalid student login");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card fade-up">

        {/* Logo */}
        <img src="/images/logo1.png" className="login-card-logo" alt="logo" />

        {/* Title */}
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Choose a login type</p>

        {/* Switch between Admin & Student */}
        <div className="login-switch">
          <button
            className={mode === "admin" ? "switch-btn active" : "switch-btn"}
            onClick={() => {
              setMode("admin");
              setUsername("");
              setPassword("");
            }}
          >
            Admin Login
          </button>

          <button
            className={mode === "student" ? "switch-btn active" : "switch-btn"}
            onClick={() => {
              setMode("student");
              setUsername("");
              setPassword("");
            }}
          >
            Student Login
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form">

          {/* Username / Roll number */}
          <label>
            {mode === "admin" ? "Admin Username" : "Student Roll Number"}
          </label>
          <input
            type="text"
            placeholder={mode === "admin" ? "admin" : "Enter roll number"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password */}
          <label>Password</label>
          <input
            type="password"
            placeholder={
              mode === "admin" 
                ? "sunrise@123" 
                : "student@yourRollNumber"
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}
