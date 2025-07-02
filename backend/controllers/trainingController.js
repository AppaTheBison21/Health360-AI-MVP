import openaiService from '../services/openaiService.js';
// TODO: Integrate CV service for real-time feedback

export const getPlan = async (req, res) => {
  // Generate plan using OpenAI based on user profile
  const userId = req.user.id;
  // TODO: Fetch user profile and pass to openaiService
  const plan = await openaiService.generateWorkoutPlan({ /* profile data */ });
  res.json({ plan });
};