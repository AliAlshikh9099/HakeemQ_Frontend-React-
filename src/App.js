import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile';
import Dashboard from './pages/dashboard/Dashboard';

import AuthContext from './store/auth-context';
import { useContext } from 'react';
import Appoitments from './components/dashboard/appoitments/Appoitments';
import Profile from './components/dashboard/profile/Profile';
import Patients from './components/dashboard/patients/Patients';
import Times from './components/dashboard/times/Times';
// import VideoSession from './pages/VideoSession/VideoSession';

function App() {
  const authCtx = useContext(AuthContext);
  return (
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/:drId' element={<DoctorProfile />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      {authCtx.isAuth && <Route path='/dashboard/*' element={<Dashboard />}>
          <Route path='appoitments' element={<Appoitments />} />
          <Route path='patients' element={<Patients />} />
          <Route path='times' element={<Times />} />
          <Route path='profile' element={<Profile />} />
      </Route>}
        {/* <Route path='/video-session' element={<VideoSession />} /> */}
        <Route path='*' element={<Home />} />
      </Routes>
  );
}

export default App;