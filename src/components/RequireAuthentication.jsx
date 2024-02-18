import React from "react";
import { Navigate } from "react-router-dom";

// Componente de ayuda para redirigir al usuario si no está autenticado
const RequireAuthentication = ({ children }) => {
  // Implementa la lógica de autenticación según tus necesidades
  // Cambia esto según tu lógica de autenticación

  const isAuthenticated = localStorage.getItem("login-signup-project");

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default RequireAuthentication;
