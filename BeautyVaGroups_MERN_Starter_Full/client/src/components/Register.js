import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Box, Paper, Typography, TextField, Button, Alert } from '@mui/material';

const Register = ({ onSuccess }) => {
  const { setAuth } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      setAuth({ token: data.token, role: data.role, email: form.email });
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Paper sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" mb={2}>Register</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField label="Email" name="email" fullWidth sx={{ mb: 2 }} value={form.email} onChange={handleChange} />
          <TextField label="Password" name="password" type="password" fullWidth sx={{ mb: 2 }} value={form.password} onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
