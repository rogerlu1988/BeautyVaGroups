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
  <Box component="section" sx={{ py: 10, bgcolor: '#f8f9fa' }}>
    <Typography variant="h3" align="center" fontWeight={700} gutterBottom fontFamily="Playfair Display, serif">
      Our Services
    </Typography>
    <Typography variant="h6" align="center" color="text.secondary" mb={6}>
      Explore our wide range of premium home beauty services delivered by professionals.
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {services.map((service, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card elevation={3} sx={{ borderRadius: 4, textAlign: 'center', py: 4 }}>
            <Avatar sx={{ bgcolor: 'white', mx: 'auto', mb: 2, width: 70, height: 70, boxShadow: 2 }}>
              {service.icon}
            </Avatar>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={1}>{service.title}</Typography>
              <Typography variant="body2" color="text.secondary">{service.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ServicesSection;
