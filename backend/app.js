import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './Routes/userRoutes.js';
import bookingRoutes from './Routes/bookingRoutes.js';
import notificationRoutes from './Routes/notificationRoutes.js'; // Import notification routes

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());

// CORS Configuration
app.use(cors({
  origin: 'https://jmoversandshakersfrontendtestt.onrender.com', // Allow frontend to access backend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Routes
app.use('/', userRoutes);
app.use('/api', bookingRoutes);
app.use('/api/notifications', notificationRoutes); // Use notification routes

export default app;
