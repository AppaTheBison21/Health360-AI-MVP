// 1) ❗ NIECH to będzie absolutnie pierwszy import
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import passport from 'passport';
import mongoose from 'mongoose';

// 2) Po załadowaniu dotenv, dopiero importujemy Passport config
import './config/passport.js';

// 3) Teraz reszta
import userRoutes from './routes/userRoutes.js';
import trainingRoutes from './routes/trainingRoutes.js';
import dietRoutes from './routes/dietRoutes.js';
import mentalHealthRoutes from './routes/mentalHealthRoutes.js';
import symptomRoutes from './routes/symptomRoutes.js';

const app = express();

// 4) Middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// 5) Trasy
app.use('/api/users', userRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/diet', dietRoutes);
app.use('/api/mental-health', mentalHealthRoutes);
app.use('/api/symptoms', symptomRoutes);

// 6) Połączenie z bazą
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

// 7) Start serwera
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log('🔑 OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? '[FOUND]' : '[MISSING]');
  console.log('🔑 GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? '[FOUND]' : '[MISSING]');
});
