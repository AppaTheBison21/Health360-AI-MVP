import openaiService from '../services/openaiService.js';

export const analyzeMeal = async (req, res) => {
  const { imageUrl } = req.body;
  const analysis = await openaiService.analyzeMealImage(imageUrl);
  res.json(analysis);
};