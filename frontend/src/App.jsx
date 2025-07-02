import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Training from './pages/Training';
import Diet from './pages/Diet';
import MentalHealth from './pages/MentalHealth';
import SymptomChecker from './pages/SymptomChecker';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/training" element={<Training />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/mentalhealth" element={<MentalHealth />} />
        <Route path="/symptomchecker" element={<SymptomChecker />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
