import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default {
  generateWorkoutPlan: async (profile) => {
    const prompt = `Create a personalized workout plan for: ${JSON.stringify(profile)}`;
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }]
    });
    return response.choices[0].message.content;
  },
  analyzeMealImage: async (url) => {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      // TODO: use vision API to analyze
      messages: [{ role: 'user', content: `Analyze meal in this image: ${url}` }]
    });
    return response.choices[0].message.content;
  },
  chatMentalHealth: async (msg) => {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'system', content: 'You are a supportive therapist.' }, { role: 'user', content: msg }]
    });
    return response.choices[0].message.content;
  },
  checkSymptoms: async (symptoms) => {
    const prompt = `User reports: ${symptoms.join(', ')}. Suggest possible causes and next steps.`;
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }]
    });
    return response.choices[0].message.content;
  }
};