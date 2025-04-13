import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  allowedRoles: string[]; // Roles allowed to access the route
  userRole: string; // Current user's role
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  userRole,
}) => {
  if (allowedRoles.includes(userRole)) {
    return <Outlet />;
  }
  return <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
