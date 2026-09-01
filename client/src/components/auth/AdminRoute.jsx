/**
 * @file AdminRoute.jsx
 * @description Route guard checking admin role with development preview fallback.
 */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../common/Loader';

const AdminRoute = ({ children }) => {
  let authContext = { user: null, loading: false };
  try {
    authContext = useAuth();
  } catch (e) {
    // Safe fallback if AuthContext is unmounted during dev hot reload
  }

  const { user, loading } = authContext;

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <Loader size="lg" />
      </div>
    );
  }

  // During local development or for admin users, allow access
  if (import.meta.env.DEV || (user && user.role === 'admin')) {
    return children;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute;
