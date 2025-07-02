import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api/diet' });
export const analyzeMeal = (token, imageUrl) =>
  API.post('/analyze', { imageUrl }, { headers: { Authorization: `Bearer ${token}` } });
