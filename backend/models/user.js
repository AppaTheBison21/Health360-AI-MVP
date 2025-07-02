import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  googleId: String,
  appleId: String,
  profile: {
    age: Number,
    height: Number,
    weight: Number,
    goals: { type: String, enum: ['reduction','gain','maintenance'] },
    diet: { vegan: Boolean, allergies: [String] },
    activityLevel: String,
    language: String
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
