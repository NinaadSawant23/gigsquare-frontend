// SignUpForm.jsx

import React, { useState } from 'react';
import styles from './SignUpForm.module.css'; // Import the CSS Module

const SignUpForm = () => {
  // ... (your existing state and handleSubmit code)

  return (
    <div className={styles['signup-container']}> {/* Use styles.signup-container */}
      <h1>Sign up to find work you love</h1>

      <div className={styles['social-buttons']}>
        <button className={styles['apple-button']}>
          <i className="fab fa-apple"></i> Continue with Apple
        </button>
        <button className={styles['google-button']}>
          <i className="fab fa-google"></i> Continue as girish girishcs097@gmail.com
        </button>
      </div>

      <div className={styles['or-divider']}>or</div>

      <form onSubmit={handleSubmit}>
        <div className={styles['name-inputs']}>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className={styles['password-input']}>
          <input
            type="password"
            placeholder="Password (8 or more characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles['password-toggle']}>
            <i className="fas fa-eye-slash"></i>
          </button>
        </div>

        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="United States">United States</option>
          {/* Add more countries here */}
        </select>

        <label className={styles['checkbox-label']}>
          <input
            type="checkbox"
            checked={sendEmails}
            onChange={() => setSendEmails(!sendEmails)}
          />
          Send me helpful emails to find rewarding work and job leads.
        </label>

        <label className={styles['checkbox-label']}>
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
          Yes, I understand and agree to the Upwork Terms of Service, including the User Agreement and Privacy Policy.
        </label>

        <button type="submit" className={styles['create-account-button']}>Create my account</button>
      </form>

      <div className={styles['login-link']}>
        Already have an account? <a href="/login">Log In</a>
      </div>
    </div>
  );
};

export default SignUpForm;