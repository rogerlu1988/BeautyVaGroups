const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to verify JWT and attach user to req
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// POST /api/bookings - create booking (requires auth, time slot check)
router.post("/", auth, async (req, res) => {
  try {
    // Prevent double-booking
    const exists = await Booking.findOne({
      serviceType: req.body.serviceType,
      date: req.body.date,
      timeSlot: req.body.timeSlot
    });
    if (exists) return res.status(400).json({ error: 'This time slot is already booked.' });

    const booking = new Booking({ ...req.body, userId: req.user.id });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/bookings - get bookings (admin gets all, user gets own)
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    let bookings;
    if (user && (user.role === 'admin' || user.email === 'admin@beautyvagroups.com')) {
      bookings = await Booking.find().populate('userId', 'email');
    } else {
      bookings = await Booking.find({ userId: req.user.id });
    }
    res.status(200).json(bookings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
