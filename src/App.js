import './App.css';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import Register from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:drId' element={<DoctorProfile />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;