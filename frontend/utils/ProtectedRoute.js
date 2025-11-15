import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const savedRole = localStorage.getItem("role");

  if (!savedRole) return <Navigate to="/login" replace />;

  if (role && savedRole !== role) return <Navigate to="/login" replace />;

  return children;
}
