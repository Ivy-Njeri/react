import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import AgeVerification from './components/AgeVerification';
import SupportPage from './pages/SupportPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ProfilePage from './pages/ProfilePage';
import MatchmakingPage from './pages/MatchmakingPage';
import ChatPage from './pages/ChatPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SettingsPage from './pages/SettingsPage';
import AdminDashboard from './Admin/AdminDashboard';
 import Reports from './Admin/Reports';



function App() {
  return (
    <Router>
      
      <ToastContainer position="top-right" autoClose={5000} pauseOnHover />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ageverification" element={<AgeVerification />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Matchmaking" element={<MatchmakingPage />} />
        <Route path="/Chats" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/reports" element={<Reports />} />

      


      </Routes>
    </Router>
  );
}

export default App;
