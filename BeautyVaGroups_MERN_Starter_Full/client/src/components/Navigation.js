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
    <AppBar position="static" sx={{ bgcolor: 'primary.main', color: 'secondary.main', boxShadow: 0, borderBottom: '2px solid #e6e6e6', mb: 4 }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, md: 6 } }}>
        {/* Logo/Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'Montserrat, sans-serif', letterSpacing: 1 }}>
            <Button component={Link} to="/" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: 28, p: 0, textTransform: 'none' }}>
              BeautyVaGroups
            </Button>
          </Typography>
        </Box>
        {/* Nav Links Centered */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: 'secondary.main', fontWeight: 600 }}>Home</Button>
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
