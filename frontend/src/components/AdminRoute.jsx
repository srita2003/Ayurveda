import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AdminRoute = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  if (!auth || !auth.token) {
    toast.error('Please log in to access the admin panel');
    return <Navigate to="/login" replace />;
  }
  if (auth.role !== 'ADMIN') {
    toast.error('You are not authorized to access the admin panel');
    return <Navigate to="/login" replace />; // Or use a NotAuthorized page
  }
  return children;
};

export default AdminRoute; 