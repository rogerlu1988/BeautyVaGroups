import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Facial Treatment', href: '#' },
      { label: 'Waxing', href: '#' },
      { label: 'Threading', href: '#' },
      { label: 'Hair Styling', href: '#' },
      { label: 'Aesthetic Treatments', href: '#' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'secondary.main', py: 8, mt: 8 }}>
    <Container maxWidth="lg">
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: 6, mb: 4 }}>
        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ fontFamily: 'Montserrat, sans-serif', mb: 2 }}>
            Quick Links
          </Typography>
          <Box>
            <Link href="/" color="secondary.main" underline="hover" sx={{ display: 'block', mb: 1, fontFamily: 'Montserrat, sans-serif' }}>Home</Link>
            <Link href="/dashboard" color="secondary.main" underline="hover" sx={{ display: 'block', mb: 1, fontFamily: 'Montserrat, sans-serif' }}>Bookings</Link>
            <Link href="/services" color="secondary.main" underline="hover" sx={{ display: 'block', mb: 1, fontFamily: 'Montserrat, sans-serif' }}>Services</Link>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ fontFamily: 'Montserrat, sans-serif', mb: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <IconButton color="secondary" href="#" sx={{ bgcolor: '#bfa544', color: '#fff', '&:hover': { bgcolor: '#e6c96a', color: '#000' } }}><InstagramIcon /></IconButton>
            <IconButton color="secondary" href="#" sx={{ bgcolor: 'accent.main', '&:hover': { bgcolor: 'accent.light', color: 'primary.main' } }}><FacebookIcon /></IconButton>
            <IconButton color="secondary" href="#" sx={{ bgcolor: 'accent.main', '&:hover': { bgcolor: 'accent.light', color: 'primary.main' } }}><TwitterIcon /></IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mt: 4 }}>
  <img src="/logo-bv.png" alt="BeautyVaGroups Logo" style={{ height: 32, width: 'auto', marginRight: 10, filter: 'drop-shadow(0 1px 2px #bfa544)' }} />
  <Typography variant="body2" sx={{ color: '#bfa544', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
    BeautyVaGroups
  </Typography>
  <Typography variant="body2" color="secondary.light" sx={{ fontFamily: 'Montserrat, sans-serif', ml: 2 }}>
    &copy; {new Date().getFullYear()} All rights reserved.
  </Typography>
</Box>
    </Container>
  </Box>
);

export default Footer;
