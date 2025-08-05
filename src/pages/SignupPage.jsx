import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('age', age);

    try {
      const response = await fetch(`${API_BASE}/api/auth/register`, {
        method: 'POST',
        body: formData,
        mode: 'cors',
        credentials: 'include', // important for cookies/cors
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Signup successful! Redirecting...');
        setError('');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        console.error('Backend error:', data);
        setError(data?.message || 'Signup failed. Please try again.');
        setSuccess('');
      }
    } catch (err) {
      console.error('Fetch/network error:', err);
      setError('Could not connect. Please check your internet or try again.');
      setSuccess('');
    }
  };

  return (
    <div className="signup-container" style={{ padding: '1rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Sign Up</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        /><br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
