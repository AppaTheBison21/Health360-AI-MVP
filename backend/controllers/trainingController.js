import openaiService from '../services/openaiService.js';

// Workout Plan
export const getPlan = async (req, res) => {
  const profile = req.user.profile;
  const plan = await openaiService.generateWorkoutPlan(profile);
  res.json({ plan });
};

// Video Analysis stub
export const analyzeVideoFrame = async (req, res) => {
  const { frameBase64 } = req.body;
  // TODO: tu podłącz MediaPipe/TensorFlow.js do analizy frameBase64
  // Na razie wysyłamy komunikat zwrotny:
  res.json({ feedback: 'Keep your back straight and engage your core.' });
};

// Wearables Data stub
export const getWearablesData = async (req, res) => {
  // TODO: podłącz Fitbit/Google Fit API, wrzuć prawdziwe tętno/kroki
  res.json({
    heartRate: 78,
    stepsToday: 5320,
    caloriesBurned: 320,
  });
};
