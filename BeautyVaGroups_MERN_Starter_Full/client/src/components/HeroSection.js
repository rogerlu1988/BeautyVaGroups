import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const HeroSection = () => (
  <Box
    sx={{
      position: 'relative',
      minHeight: { xs: '55vh', md: '77vh' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'secondary.main',
      textAlign: 'center',
      py: { xs: 10, md: 18 },
      borderBottom: '4px solid #e6e6e6',
      overflow: 'hidden'
    }}
  >
    <Box sx={{
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  opacity: 0.08,
  background: 'url(/logo-bv.png) center/40% no-repeat',
}} />
<Typography
  variant="h2"
  component="h1"
  fontWeight={700}
  sx={{
    color: '#bfa544',
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: 1,
    mb: 2,
    fontSize: { xs: 32, md: 52 },
    zIndex: 1,
    position: 'relative'
  }}
  gutterBottom
>
  Luxury Beauty, Delivered
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
