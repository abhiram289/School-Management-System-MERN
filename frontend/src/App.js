import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Notices from "./pages/Notices";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";                 // ✅ NEW
import StudentDashboard from "./pages/StudentDashboard"; // ✅ NEW

import "./App.css";

// ----------------------------
// 🔒 Protected Route Component
// ----------------------------
function ProtectedRoute({ children, role }) {
  const savedRole = localStorage.getItem("role");

  if (!savedRole) return <Navigate to="/login" replace />;
  if (role && savedRole !== role) return <Navigate to="/login" replace />;

  return children;
}

function App() {
  const role = localStorage.getItem("role");

  return (
    <Router>
      <div className="app">

        {/* ✔️ Nav only visible when logged in */}
        {role && (
          <nav className="nav">
            <div className="nav-left">
              <Link to="/" className="logo-link">
                <img src="/images/logo.png" alt="School Logo" className="school-logo" />
              </Link>
              <h2>Sunrise Public School</h2>
            </div>

            <div className="navlinks">
              {role === "admin" && (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/students">Students</Link>
                  <Link to="/teachers">Teachers</Link>
                  {role === "admin" && <Link to="/attendance">Attendance</Link>}
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/notices">Announcements</Link>
                </>
              )}

              {role === "student" && (
                <>
                  <Link to="/student-dashboard">My Dashboard</Link>
                </>
              )}

              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>

              {/* Logout Button */}
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </div>
          </nav>
        )}

        {/* MAIN ROUTES */}
        <main className="main">
          <Routes>
            {/* PUBLIC ROUTE */}
            <Route path="/login" element={<Login />} />

            {/* ADMIN ROUTES */}
            <Route
              path="/"
              element={
                <ProtectedRoute role="admin">
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/students"
              element={
                <ProtectedRoute role="admin">
                  <Students />
                </ProtectedRoute>
              }
            />

            <Route
              path="/teachers"
              element={
                <ProtectedRoute role="admin">
                  <Teachers />
                </ProtectedRoute>
              }
            />

            <Route
              path="/attendance"
              element={
                <ProtectedRoute role="admin">
                  <Attendance />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute role="admin">
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/notices"
              element={
                <ProtectedRoute role="admin">
                  <Notices />
                </ProtectedRoute>
              }
            />

            {/* STUDENT ROUTES */}
            <Route
              path="/student-dashboard"
              element={
                <ProtectedRoute role="student">
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />

            {/* SHARED ROUTES */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* DEFAULT → LOGIN */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>

        {role && (
          <footer className="footer">© Sunrise Public School Management Services</footer>
        )}
      </div>
    </Router>
  );
}

export default App;
