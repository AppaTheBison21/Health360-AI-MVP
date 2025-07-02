import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api/training' });

export const fetchPlan = token =>
  API.get('/plan', { headers: { Authorization: `Bearer ${token}` } });

export const analyzeFrame = (token, frameBase64) =>
  API.post('/video', { frameBase64 }, { headers: { Authorization: `Bearer ${token}` } });

export const fetchWearables = token =>
  API.get('/wearables', { headers: { Authorization: `Bearer ${token}` } });
