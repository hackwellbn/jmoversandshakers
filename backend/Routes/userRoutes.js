import express from 'express';
import { createUser } from '../Controllers/userController.js';
import { createBooking } from '../Controllers/bookingController.js';

const router = express.Router();
router.post('/signup', createUser);


//booking routes.js
router.post('/book', createBooking);

export default router;
