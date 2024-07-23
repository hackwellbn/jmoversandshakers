import dotenv from 'dotenv';
dotenv.config(); // Ensure .env is loaded
import app from './app.js';
import connectDB from './db/connectDB.js';
import config from './config/config.js';

const PORT = config.port;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
