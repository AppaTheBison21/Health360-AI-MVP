import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';
import './config/passport.js';

import userRoutes from './routes/userRoutes.js';
import trainingRoutes from './routes/trainingRoutes.js';
import dietRoutes from './routes/dietRoutes.js';
import mentalHealthRoutes from './routes/mentalHealthRoutes.js';
import symptomRoutes from './routes/symptomRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/diet', dietRoutes);
app.use('/api/mental-health', mentalHealthRoutes);
app.use('/api/symptoms', symptomRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
