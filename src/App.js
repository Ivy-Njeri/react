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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />
       <Route path="/about" element={<AboutPage/>}/>
       < Route path="/ageverification" element={<AgeVerification/>}/>
       <Route path="/support" element={<SupportPage/>}/>
       <Route path="/testimonials" element={<TestimonialsPage/>}/>
       <Route path="/profile" element={<ProfilePage/>}/>
       <Route path="/Matchmaking" element={<MatchmakingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
