import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';

export default function Register() {
  const [form, setForm] = useState({ email: '', password: '' });
  const nav = useNavigate();
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    await registerUser(form);
    nav('/dashboard');
  };
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" onChange={handleChange} placeholder="Email" className="w-full p-2 border" required />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" className="w-full p-2 border" required />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
    </div>
  );
}
