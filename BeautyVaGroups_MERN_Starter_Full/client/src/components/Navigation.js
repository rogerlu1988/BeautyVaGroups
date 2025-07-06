import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

const Navigation = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({ token: '', role: '', email: '' });
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', color: 'secondary.main', boxShadow: 0, borderBottom: '2px solid #e6e6e6', mb: 4, minHeight: 80 }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', px: { xs: 1, md: 6 }, minHeight: 80 }}>
        {/* Logo/Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <img src="/logo-bv.png" alt="BeautyVaGroups Logo" style={{ height: 38, width: 'auto', marginRight: 8, filter: 'drop-shadow(0 2px 4px rgba(230, 190, 46, 0.25))' }} />
  <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'Montserrat, sans-serif', color: '#bfa544', letterSpacing: 1 }}>
    BeautyVaGroups
  </Typography>
</Box>
        </Box>
        {/* Nav Links Centered */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: 'secondary.main', fontWeight: 600, fontSize: 18 }}>Home</Button>
          <Button component={Link} to="/dashboard" sx={{ color: 'secondary.main', fontWeight: 600 }}>Bookings</Button>
          <Button component={Link} to="/services" sx={{ color: 'secondary.main', fontWeight: 600 }}>Services</Button>
        </Box>
        {/* Icons/User Actions Right */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit">
            <ShoppingBagIcon />
          </IconButton>
          {!auth.token ? (
            <>
              <IconButton color="inherit" component={Link} to="/login">
                <LoginIcon />
              </IconButton>
              <Button component={Link} to="/register" sx={{ color: 'secondary.main', fontWeight: 600, ml: 1 }}>Register</Button>
            </>
          ) : (
            <>
              <IconButton color="inherit" component={Link} to="/dashboard">
                <AccountCircleIcon />
              </IconButton>
              <Button onClick={handleLogout} sx={{ color: 'secondary.main', fontWeight: 600, ml: 1 }}>Logout</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
