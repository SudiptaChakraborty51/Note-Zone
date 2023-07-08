import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;