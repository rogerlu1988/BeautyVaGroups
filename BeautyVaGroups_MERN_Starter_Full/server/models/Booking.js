const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  customerName: String,
  serviceType: String,
  date: Date,
  timeSlot: String,
  location: String,
  email: String,
  phone: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", BookingSchema);
