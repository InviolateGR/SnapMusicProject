import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import './Common Styles.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Phone:', phone);
  };

  return (
    <div className="signup-page">

    <div className="signup-container">
      <div className="signup-header">
        <h1>SnapMusic</h1>
        <h2>Sign up to start listening</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Use phone number instead</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <Link to="/homepage" style={{ textDecoration: 'none' }}>
            <button type="submit">Next</button>
        </Link>
        <p>or</p>
        <div className="social-buttons">
          <button className="google-button">
            <img src="src\assets\google-icon.png" alt="Google Logo" />
            Sign up with Google
          </button>
          <button className="facebook-button">
            <img src="src\assets\Facebook-logo.png" alt="Facebook Logo" />
            Sign up with Facebook
          </button>
          <button className="apple-button">
            <img src="src\assets\apple-logo.png" alt="Apple Logo" />
            Sign up with Apple
          </button>
        </div>
      </form>
      <p>Already have an account? Log in here.</p>
    </div>
    </div>

  );
};

export default Signup;