import openaiService from '../services/openaiService.js';

export const chat = async (req, res) => {
  const { message } = req.body;
  const response = await openaiService.chatMentalHealth(message);
  res.json(response);
};