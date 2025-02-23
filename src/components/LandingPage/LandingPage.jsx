import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.hero}>
        <h1>We unite visionaries and creators to turn ideas into reality.</h1>
        <p>Discover top-tier talent or land your next job with AI-powered tools that put you in charge.</p>
        <Link to="/verified-profiles"> {/* Use Link component */}
          <button className={styles.ctaButton}>See Verified Profiles</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
