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
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" fontWeight={700} sx={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: 1, mb: 1 }}>
          BeautyVaGroups
        </Typography>
        <Typography variant="body2" color="secondary.light" sx={{ fontFamily: 'Montserrat, sans-serif', mb: 2 }}>
          Premium home beauty services delivered to your door.
        </Typography>
      </Box>
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
            <IconButton color="secondary" href="#" sx={{ bgcolor: 'accent.main', '&:hover': { bgcolor: 'accent.light', color: 'primary.main' } }}><InstagramIcon /></IconButton>
            <IconButton color="secondary" href="#" sx={{ bgcolor: 'accent.main', '&:hover': { bgcolor: 'accent.light', color: 'primary.main' } }}><FacebookIcon /></IconButton>
            <IconButton color="secondary" href="#" sx={{ bgcolor: 'accent.main', '&:hover': { bgcolor: 'accent.light', color: 'primary.main' } }}><TwitterIcon /></IconButton>
          </Box>
        </Box>
      </Box>
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="secondary.light" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          &copy; {new Date().getFullYear()} BeautyVaGroups. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
