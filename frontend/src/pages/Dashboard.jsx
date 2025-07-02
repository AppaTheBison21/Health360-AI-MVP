import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { FireIcon } from '@heroicons/react/24/solid';
import { HeartIcon, UserIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    steps: 0,
    calories: 0,
    moodScore: 0,
    workouts: 0,
  });
  const [activityData, setActivityData] = useState([]);
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    // Fetch overview metrics
    axios.get('http://localhost:5000/api/dashboard/overview', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setMetrics(res.data));
    // Fetch activity history
    axios.get('http://localhost:5000/api/dashboard/activity', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setActivityData(res.data));
    // Fetch mood history
    axios.get('http://localhost:5000/api/dashboard/mood', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setMoodData(res.data));
  }, []);

  const cards = [
    { title: 'Steps Today', value: metrics.steps, icon: <UserIcon className="w-6 h-6 text-blue-500"/> },
    { title: 'Calories', value: metrics.calories, icon: <FireIcon className="w-6 h-6 text-red-500"/> },
    { title: 'Mood Score', value: metrics.moodScore, icon: <HeartIcon className="w-6 h-6 text-pink-500"/> },
    { title: 'Workouts', value: metrics.workouts, icon: <ChartBarIcon className="w-6 h-6 text-green-500"/> },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Karty z kluczowymi metricami */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ title, value, icon }) => (
          <div key={title} className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            {icon}
            <div>
              <div className="text-gray-500">{title}</div>
              <div className="text-2xl font-semibold">{value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Wykresy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Activity (Last 7 days)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={activityData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="steps" stroke="#3b82f6" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Mood (Last 7 days)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={moodData}>
              <XAxis dataKey="day" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#ec4899" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
);
}
