import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import DoctorProfile from './pages/DoctorsPage/DoctorProfile/DoctorProfile';
import Dashboard from './pages/dashboard/Dashboard';

import AuthContext from './store/auth-context';
import { useContext } from 'react';
import Appoitments from './components/dashboard/appoitments/Appoitments';
import Profile from './components/dashboard/profile/Profile';
import Patients from './components/dashboard/patients/Patients';
import Times from './components/dashboard/times/Times';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage';
// import VideoSession from './pages/VideoSession/VideoSession';

import { useState, useEffect } from 'react';
import axios from 'axios';

import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const authCtx = useContext(AuthContext);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
        axios.get('http://192.168.43.7:8000/api/doctors', {
            headers: {
              'Content-Type': 'application/json'
            }
        })
          .then(res => {
            setDoctors(res.data.data);
          })
          .catch(error => {
            console.log(error);
          })
    }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='*' element={<Navigate replace to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doctors' element={<DoctorsPage doctors={doctors} />} />
      <Route path='/doctors/:drId' element={<DoctorProfile />} />
      {!authCtx.isAuth && <Route path='/login' element={<LoginPage />} />}
      {!authCtx.isAuth && <Route path='/register' element={<RegisterPage />} />}
      {authCtx.isAuth && <Route path='/dashboard/*' element={<Dashboard />}>
        <Route path='appoitments' element={<Appoitments />} />
        <Route path='patients' element={<Patients />} />
        <Route path='times' element={<Times />} />
        <Route path='profile' element={<Profile />} />
      </Route>}
      {/* <Route path='/video-session' element={<VideoSession />} /> */}
    </Routes>
  );
}

export default App;