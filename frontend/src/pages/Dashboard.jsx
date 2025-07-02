import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // TODO: fetch dashboard data
    setData([{ name: 'Mon', uv: 400 }, { name: 'Tue', uv: 300 }]);
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" />
      </LineChart>
    </div>
  );
}
