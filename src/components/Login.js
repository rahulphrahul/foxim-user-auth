import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData, clearUserData } from '../redux/actions/authActions';
import GoogleLoginButton from './GoogleLoginButton';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLinkedInSuccess = (userData) => {
    dispatch(setUserData(userData));
  };

  const handleLinkedInFailure = (error) => {
    console.error('LinkedIn login failed:', error);
    dispatch(clearUserData());
  };

  const handleGoogleSuccess = (userData) => {
    dispatch(setUserData(userData));
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login failed:', error);
    dispatch(clearUserData());
  };

  const handleLogin = () => {
    // Perform API call with email and password
    // Replace this with your actual API call logic

    // For demonstration purposes, let's log the entered email and password
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear email and password fields after the API call
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <GoogleLoginButton
          handleSuccess={handleGoogleSuccess}
          handleFailure={handleGoogleFailure}
        />
        <form style={{ marginTop: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
          <br />
          <label style={{ display: 'block', marginBottom: '8px', marginTop: '10px' }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
          <br />
          <button type="button" onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Login;
