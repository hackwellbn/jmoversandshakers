// bookingController.js
import Booking from '../models/bookingModel.js';

export const createBooking = async (req, res) => {
  try {
    const { name, email, date, time } = req.body;

    // Validate input
    if (!name || !email || !date || !time) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new booking
    const booking = new Booking({
      name,
      email,
      date,
      time
    });

    await booking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the booking' });
  }
};
