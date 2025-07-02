import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api/training' });
export const fetchPlan = token => API.get('/plan', { headers: { Authorization: `Bearer ${token}` } });
