import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import AgeVerification from './components/AgeVerification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />
       <Route path="/about" element={<AboutPage/>}/>
       < Route path="/ageverification" element={<AgeVerification/>}/>
      </Routes>
    </Router>
  );
}

export default App;
