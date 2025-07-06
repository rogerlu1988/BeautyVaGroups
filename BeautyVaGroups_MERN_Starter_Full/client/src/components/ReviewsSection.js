import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const reviews = [
  {
    name: 'Sophia L.',
    service: 'Facial Treatment',
    text: 'Absolutely loved the experience! The professional was prompt and my skin feels amazing. Highly recommend BeautyVaGroups!',
    color: 'linear-gradient(135deg, #ff6b8b 0%, #ff8e9e 100%)',
  },
  {
    name: 'Emily R.',
    service: 'Waxing',
    text: 'Very gentle and efficient. Booking was easy and the results are fantastic. Will book again!',
    color: 'linear-gradient(135deg, #6a5af9 0%, #8d7dff 100%)',
  },
  {
    name: 'Jessica M.',
    service: 'Hair Styling',
    text: 'My hair has never looked better. The stylist listened to exactly what I wanted. 10/10!',
    color: 'linear-gradient(135deg, #42b883 0%, #64d4a6 100%)',
  },
];

const ReviewsSection = () => (
  <Box component="section" sx={{ py: 10, background: '#f8f9fa' }}>
    <Typography variant="h3" align="center" fontWeight={700} gutterBottom fontFamily="Playfair Display, serif">
      Customer Reviews
    </Typography>
    <Typography variant="h6" align="center" color="text.secondary" mb={6}>
      See what our satisfied clients have to say about our services and professionals
    </Typography>
    <Grid container spacing={6} justifyContent="center">
      {reviews.map((review, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card elevation={0} sx={{ borderRadius: 4, p: 3, mb: 2, bgcolor: 'secondary.main', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)', border: '1px solid #ececec' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{review.avatar}</Avatar>
                <Typography fontWeight={700} sx={{ fontFamily: 'Montserrat, sans-serif', color: 'primary.main' }}>{review.name}</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" fontStyle="italic" mb={1} sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                {review.text}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: 'accent.main', fontSize: 20 }} />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ReviewsSection;
