const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5001, () => console.log("Server running on port 5001")))
    .catch(err => console.log(err));


const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);
