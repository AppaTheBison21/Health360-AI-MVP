import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api/symptoms' });
export const check = (token, symptoms) =>
  API.post('/check', { symptoms }, { headers: { Authorization: `Bearer ${token}` } });
