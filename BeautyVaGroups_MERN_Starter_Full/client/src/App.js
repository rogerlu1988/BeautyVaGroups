import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import BookingSection from './components/BookingSection';
import VouchersSection from './components/VouchersSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <HeroSection />
      <ServicesSection />
      <BookingSection />
      <VouchersSection />
      <ReviewsSection />
      <Footer />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Additional sections or content can be added here if needed. */}
      </Container>
    </>
  );
}

export default App;
