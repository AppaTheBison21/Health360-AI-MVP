import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api/mental-health' });
export const chat = (token, message) =>
  API.post('/chat', { message }, { headers: { Authorization: `Bearer ${token}` } });
