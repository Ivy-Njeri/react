import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">💕 Welcome to LoveConnect</h1>
      <p className="login-subtitle">Find your perfect match today</p>
      
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="/">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>
        <p className="signup-link">Don’t have an account? <a href="/">Sign Up</a></p>
      </form>
    </div>
  );
};

export default LoginPage;
