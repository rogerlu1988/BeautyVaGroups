import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, MenuItem, Alert, CircularProgress } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

const services = [
  'Facial',
  'Waxing',
  'Threading',
  'Hair Styling',
  'Aesthetic Treatments',
];

const initialState = {
  serviceType: services[0],
  location: '',
  date: '',
  timeSlot: '',
  customerName: '',
  email: '',
  phone: '',
};

const BookingSection = () => {
  const { auth } = useContext(AuthContext);
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);

  // Fetch booked time slots for the selected service/date
  useEffect(() => {
    if (!form.date || !form.serviceType) {
      setBookedSlots([]);
      return;
    }
    fetch(`/api/bookings`, {
      headers: auth.token ? { Authorization: `Bearer ${auth.token}` } : {}
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const filtered = data.filter(b => b.date && new Date(b.date).toISOString().slice(0,10) === form.date && b.serviceType === form.serviceType);
          setBookedSlots(filtered.map(b => b.timeSlot));
        }
      });
  }, [form.date, form.serviceType, auth.token]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.customerName || !form.email || !form.date || !form.timeSlot || !form.location) return false;
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setError('');
    if (!validate()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!auth.token) {
      setError('You must be logged in to book a service.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`
        },
        body: JSON.stringify({
          customerName: form.customerName,
          serviceType: form.serviceType,
          date: form.date,
          timeSlot: form.timeSlot,
          location: form.location,
          email: form.email,
          phone: form.phone
        })
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Booking failed');
      setSuccess('Booking successful! We will contact you soon.');
      setForm(initialState);
    } catch (err) {
      setError(err.message || 'Booking failed.');
    } finally {
      setLoading(false);
    }
  };

  // Example time slots (customize as needed)
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  return (
    <Box component="section" sx={{ py: 10 }}>
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom fontFamily="Playfair Display, serif">
        Book Your Service
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" mb={6}>
        Select your service, date, and location to get started with our professionals
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ borderRadius: 4, p: { xs: 2, md: 5 }, bgcolor: 'secondary.main', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)', border: '1px solid #ececec' }}>
            <Typography variant="h5" fontWeight={700} mb={3} sx={{ fontFamily: 'Montserrat, sans-serif', color: 'primary.main', fontSize: { xs: 22, md: 28 } }}>
              Book Your Service
            </Typography>
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Select Service"
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  >
                    {services.map((service, idx) => (
                      <MenuItem key={idx} value={service}>{service}</MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    select
                    fullWidth
                    label="Time Slot"
                    name="timeSlot"
                    value={form.timeSlot}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                    helperText={form.date ? (bookedSlots.length > 0 ? 'Unavailable slots are disabled.' : 'All slots available.') : 'Select a date first.'}
                  >
                    {timeSlots.map(slot => (
                      <MenuItem key={slot} value={slot} disabled={bookedSlots.includes(slot)}>
                        {slot} {bookedSlots.includes(slot) ? '(Booked)' : ''}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="customerName"
                    value={form.customerName}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2, width: '100%' }}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Book Now'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingSection;
