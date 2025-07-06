import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Alert } from '@mui/material';

const BookingDashboard = () => {
  const { auth } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!auth.token) return;
    fetch('/api/bookings', {
      headers: { Authorization: `Bearer ${auth.token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        else setBookings(data);
      });
  }, [auth.token]);

  if (!auth.token) return <Alert severity="info">Please login to view your bookings.</Alert>;

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" mb={3}>Your Bookings</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              {auth.role === 'admin' && <TableCell>User</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map(b => (
              <TableRow key={b._id}>
                <TableCell>{b.serviceType}</TableCell>
                <TableCell>{b.date && new Date(b.date).toLocaleDateString()}</TableCell>
                <TableCell>{b.timeSlot}</TableCell>
                <TableCell>{b.location}</TableCell>
                <TableCell>{b.customerName}</TableCell>
                <TableCell>{b.email}</TableCell>
                {auth.role === 'admin' && <TableCell>{b.userId?.email || ''}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default BookingDashboard;
