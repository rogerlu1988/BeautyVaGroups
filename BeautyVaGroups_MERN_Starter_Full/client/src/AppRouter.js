import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import BookingDashboard from './components/BookingDashboard';
import Navigation from './components/Navigation';
import { AuthContext } from './context/AuthContext';

const AppRouter = () => {
  const { auth } = React.useContext(AuthContext);
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={auth.token ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/register" element={auth.token ? <Navigate to="/dashboard" /> : <Register />} />
        <Route path="/dashboard" element={auth.token ? <BookingDashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
