import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import FaceIcon from '@mui/icons-material/Face';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StarIcon from '@mui/icons-material/Star';

const services = [
  {
    icon: <SpaIcon sx={{ fontSize: 40, color: '#ff6b8b' }} />, title: 'Facial', desc: 'Rejuvenating facial treatments for glowing skin.',
  },
  {
    icon: <FaceIcon sx={{ fontSize: 40, color: '#6a5af9' }} />, title: 'Waxing', desc: 'Smooth and gentle waxing for all skin types.',
  },
  {
    icon: <ContentCutIcon sx={{ fontSize: 40, color: '#42b883' }} />, title: 'Hair Styling', desc: 'Trendy cuts and styles by professionals.',
  },
  {
    icon: <EmojiPeopleIcon sx={{ fontSize: 40, color: '#ffc107' }} />, title: 'Threading', desc: 'Precise threading for perfect brows.',
  },
  {
    icon: <StarIcon sx={{ fontSize: 40, color: '#8a2be2' }} />, title: 'Aesthetic', desc: 'Premium aesthetic treatments and care.',
  },
];

const ServicesSection = () => (
  <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'secondary.light' }}>
    <Typography
      variant="h3"
      align="center"
      fontWeight={700}
      gutterBottom
      sx={{ fontFamily: 'Montserrat, sans-serif', color: 'primary.main', mb: 2, fontSize: { xs: 28, md: 40 } }}
    >
      Our Services
    </Typography>
    <Typography
      variant="h6"
      align="center"
      color="text.secondary"
      sx={{ mb: 6, fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
    >
      Explore our range of professional beauty services
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {services.map((service, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              textAlign: 'center',
              p: 3,
              bgcolor: 'secondary.main',
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)',
              border: '1px solid #ececec',
              transition: 'box-shadow 0.2s',
              '&:hover': { boxShadow: '0 8px 32px 0 rgba(230,0,35,0.12)' }
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              {React.cloneElement(service.icon, { sx: { fontSize: 48, color: 'accent.main' } })}
            </Box>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ fontFamily: 'Montserrat, sans-serif', color: 'primary.main', mb: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: 'Montserrat, sans-serif' }}>
                {service.desc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ServicesSection;
