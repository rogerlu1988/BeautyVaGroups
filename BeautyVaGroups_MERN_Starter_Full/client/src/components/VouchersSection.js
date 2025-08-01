import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const vouchers = [
  {
    amount: '10% OFF',
    title: 'First Booking',
    desc: 'Enjoy 10% off on your first beauty service booking with us!',
    code: 'WELCOME10',
    color: 'linear-gradient(135deg, #ff6b8b 0%, #ff8e9e 100%)'
  },
  {
    amount: '20% OFF',
    title: 'Summer Special',
    desc: 'Avail 20% discount on select summer treatments. Limited time!',
    code: 'SUMMER20',
    color: 'linear-gradient(135deg, #6a5af9 0%, #d66efd 100%)'
  },
  {
    amount: '15% OFF',
    title: 'Refer a Friend',
    desc: 'Refer a friend and both receive 15% off your next appointment.',
    code: 'FRIEND15',
    color: 'linear-gradient(135deg, #42b883 0%, #64d4a6 100%)'
  }
];

const VouchersSection = () => (
  <Box component="section" sx={{ py: 10, background: 'linear-gradient(135deg, #6a5af9 0%, #d66efd 100%)', color: 'white', textAlign: 'center' }}>
    <Typography variant="h3" fontWeight={700} gutterBottom fontFamily="Playfair Display, serif">
      Special Vouchers
    </Typography>
    <Typography variant="h6" color="inherit" mb={6}>
      Unlock exclusive discounts and offers for your next beauty service
    </Typography>
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
      {vouchers.map((voucher, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card elevation={6} sx={{ borderRadius: 4, background: 'white', color: 'black', textAlign: 'center', minHeight: 260, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)', border: '1px solid #ececec' }}>
            <CardContent sx={{ p: 3, mb: 2 }}>
              <Typography variant="h6" fontWeight={700} mb={1} sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black' }}>
                {voucher.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2} sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                {voucher.desc}
              </Typography>
              <Button variant="contained" color="primary" sx={{ fontWeight: 600, borderRadius: 2, bgcolor: 'black', color: 'white', '&:hover': { bgcolor: 'black', color: 'white' } }}>Get Voucher</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default VouchersSection;
