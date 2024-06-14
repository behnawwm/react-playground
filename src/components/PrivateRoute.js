import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ component: Component }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? <Component /> : <Navigate to="/" replace state={{ from: location }} />;
};

export default PrivateRoute;
