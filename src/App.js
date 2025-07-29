import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import AgeVerification from './components/AgeVerification';
import SupportPage from './pages/SupportPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SettingsPage from './pages/SettingsPage';
import AdminDashboard from './Admin/AdminDashboard';
import Reports from './Admin/Reports';
import BrowsePage from './pages/BrowsePage';
import LandingPage from './pages/LandingPage';
import Moments from './pages/Moments'; 
import AuthLanding from './pages/AuthLanding';

const App = () => {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover />
      <Routes>
        <Route path="/auth" element={<AuthLanding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ageverification" element={<AgeVerification />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/moments" element={<Moments />} />
      </Routes>
    </Router>
  );
}

export default App;
