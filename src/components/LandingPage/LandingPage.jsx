import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.hero}>
        <h1>We unite visionaries and creators to turn ideas into reality.</h1>
        <p>Discover top-tier talent or land your next job with AI-powered tools that put you in charge.</p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
