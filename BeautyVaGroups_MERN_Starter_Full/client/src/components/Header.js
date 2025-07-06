import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SpaIcon from '@mui/icons-material/Spa';

const Header = () => (
  <AppBar position="sticky" color="inherit" elevation={2} sx={{ mb: 4 }}>
    <Toolbar>
      <IconButton edge="start" color="primary" aria-label="logo" sx={{ mr: 2 }}>
        <SpaIcon fontSize="large" />
      </IconButton>
      <Typography variant="h5" component="div" color="primary" sx={{ flexGrow: 1, fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
        BeautyVaGroups
      </Typography>
      {/* Add nav links or buttons here if needed */}
    </Toolbar>
  </AppBar>
);

export default Header;
