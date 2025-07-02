import { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { fetchPlan, analyzeFrame, fetchWearables } from '../api/training';

export default function Training() {
  const [plan, setPlan] = useState('');
  const [loadingPlan, setLoadingPlan] = useState(false);

  const webcamRef = useRef(null);
  const [videoFeedback, setVideoFeedback] = useState('');
  const [wearables, setWearables] = useState(null);

  // Pobierz wearables przy mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetchWearables(token).then(setWearables);
  }, []);

  // Funkcja wywoływana po kliknięciu "Generate Plan"
  const handleGetPlan = async () => {
    setLoadingPlan(true);
    const token = localStorage.getItem('token');
    const res = await fetchPlan(token);
    setPlan(res.data.plan);
    setLoadingPlan(false);
  };

  // Funkcja robiąca snapshot i wysyłająca do backendu
  const handleAnalyzeFrame = async () => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    const token = localStorage.getItem('token');
    const res = await analyzeFrame(token, imageSrc);
    setVideoFeedback(res.data.feedback);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Training Module</h1>

      <Tabs>
        <TabList>
          <Tab>Workout Plan</Tab>
          <Tab>Video Analysis</Tab>
          <Tab>Wearables</Tab>
        </TabList>

        {/* Workout Plan */}
        <TabPanel>
          <button
            onClick={handleGetPlan}
            disabled={loadingPlan}
            className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
          >
            {loadingPlan ? 'Generating…' : 'Generate Plan'}
          </button>
          {plan && (
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
              {plan}
            </pre>
          )}
        </TabPanel>

        {/* Video Analysis */}
        <TabPanel>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: 'user' }}
            className="rounded shadow mb-4"
          />
          <button
            onClick={handleAnalyzeFrame}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Analyze Frame
          </button>
          {videoFeedback && (
            <p className="mt-4 text-lg italic text-gray-700">{videoFeedback}</p>
          )}
        </TabPanel>

        {/* Wearables */}
        <TabPanel>
          {wearables ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <div className="text-sm text-gray-500">Heart Rate</div>
                <div className="text-2xl font-semibold">{wearables.heartRate} bpm</div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="text-sm text-gray-500">Steps Today</div>
                <div className="text-2xl font-semibold">{wearables.stepsToday}</div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="text-sm text-gray-500">Calories Burned</div>
                <div className="text-2xl font-semibold">{wearables.caloriesBurned}</div>
              </div>
            </div>
          ) : (
            <p>Loading wearables data…</p>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
}
