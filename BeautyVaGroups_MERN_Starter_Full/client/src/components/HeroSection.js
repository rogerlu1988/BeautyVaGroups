import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const HeroSection = () => (
  <Box
    sx={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'linear-gradient(135deg, #fdf2f8 0%, #f0f4f8 100%)',
      textAlign: 'center',
      py: 10,
    }}
  >
    <SpaIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
    <Typography variant="h2" component="h1" fontWeight={700} color="primary" gutterBottom>
      BeautyVaGroups
    </Typography>
    <Typography variant="h5" color="text.secondary" mb={4}>
      Premium Home Services
    </Typography>
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant="contained" color="primary" size="large">
        Book Now
      </Button>
      <Button variant="outlined" color="secondary" size="large">
        Learn More
      </Button>
    </Stack>
  </Box>
);

export default HeroSection;
