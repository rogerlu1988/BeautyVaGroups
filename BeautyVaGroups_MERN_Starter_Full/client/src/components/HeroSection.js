import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const HeroSection = () => (
  <Box
    sx={{
      minHeight: { xs: '50vh', md: '75vh' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'secondary.main',
      textAlign: 'center',
      py: { xs: 8, md: 16 },
      borderBottom: '4px solid #e6e6e6',
    }}
  >
    <SpaIcon sx={{ fontSize: 72, color: 'primary.main', mb: 2 }} />
    <Typography
      variant="h2"
      component="h1"
      fontWeight={700}
      sx={{
        color: 'primary.main',
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: 1,
        mb: 2,
        fontSize: { xs: 36, md: 56 }
      }}
      gutterBottom
    >
      BeautyVaGroups
    </Typography>
    <Typography
      variant="h5"
      sx={{
        color: 'accent.main',
        fontWeight: 500,
        fontFamily: 'Montserrat, sans-serif',
        mb: 4,
        fontSize: { xs: 18, md: 28 }
      }}
    >
      Premium Home Beauty Services
    </Typography>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
      <Button
        variant="contained"
        color="accent"
        size="large"
        sx={{
          bgcolor: 'accent.main',
          color: 'secondary.main',
          fontWeight: 700,
          px: 5,
          py: 1.5,
          borderRadius: 8,
          fontSize: 20,
          '&:hover': { bgcolor: 'accent.light', color: 'primary.main' }
        }}
      >
        Book Now
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        sx={{
          borderColor: 'primary.main',
          color: 'primary.main',
          fontWeight: 600,
          px: 5,
          py: 1.5,
          borderRadius: 8,
          fontSize: 20,
          '&:hover': { bgcolor: 'primary.main', color: 'secondary.main' }
        }}
      >
        Learn More
      </Button>
    </Stack>
  </Box>
);

export default HeroSection;
