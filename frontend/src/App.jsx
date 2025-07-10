import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import CsvPage from './pages/CsvPage';
import LandingPage from './pages/LandingPage';
import NavbarLanding from './components/NavbarLanding';
import AdminRoute from './components/AdminRoute';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/RegisterPage';
import './App.css';

const ReportsPage = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-gray-600 text-xl">Reports coming soon...</div>
);

function AuthenticatedLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#F7F5ED] flex flex-col">
      <NavbarLanding />
      <div className="flex-1 w-full py-12 px-0">
        {children}
      </div>
    </div>
  );
}

function AuthRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (!auth || !auth.token) {
      navigate('/login', { replace: true });
    } else {
      navigate('/home', { replace: true });
    }
  }, [navigate]);
  return null;
}

function ProtectedRoute({ children, adminOnly }) {
  const auth = JSON.parse(localStorage.getItem('auth'));
  if (!auth || !auth.token) return <Navigate to="/login" replace />;
  if (adminOnly && auth.role !== 'ADMIN') return <Navigate to="/home" replace />;
  return children;
}

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<AuthenticatedLayout><LandingPage /></AuthenticatedLayout>} />
        <Route path="/upload" element={<AuthenticatedLayout><CsvPage /></AuthenticatedLayout>} />
        <Route path="/reports" element={<AuthenticatedLayout><ReportsPage /></AuthenticatedLayout>} />
        <Route path="/admin" element={<ProtectedRoute adminOnly={true}><AuthenticatedLayout><AdminPage /></AuthenticatedLayout></ProtectedRoute>} />
        <Route path="/" element={<AuthRedirect />} />
        <Route path="*" element={<AuthRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
