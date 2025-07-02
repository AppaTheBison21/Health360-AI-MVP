import openaiService from '../services/openaiService.js';

export const checkSymptoms = async (req, res) => {
  const { symptoms } = req.body;
  const result = await openaiService.checkSymptoms(symptoms);
  res.json(result);
};