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
      { label: 'FAQs', href: '#' },
    ],
  },
];

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#18181b', color: '#fff', py: 6, mt: 8 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Typography variant="h5" fontWeight={700} fontFamily="Playfair Display, serif" gutterBottom>
            BeautyVaGroups
          </Typography>
          <Typography variant="body2" color="#a0aec0" mb={2}>
            Premium home beauty services delivered by certified professionals. Experience luxury and convenience at your doorstep.
          </Typography>
          <Box>
            <IconButton color="inherit" href="#" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="#" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" href="#" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
        {footerLinks.map((col, idx) => (
          <Grid item xs={12} md={2} key={idx}>
            <Typography variant="h6" fontWeight={600} mb={2}>{col.title}</Typography>
            {col.links.map((link, i) => (
              <Typography key={i} variant="body2" mb={1}>
                <Link href={link.href} color="#a0aec0" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  {link.label}
                </Link>
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
      <Box mt={5} textAlign="center">
        <Typography variant="body2" color="#a0aec0">
          &copy; {new Date().getFullYear()} BeautyVaGroups. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
