import React from 'react';
import styles from './HireTalent.module.css';

const HireTalent = () => {
  return (
    <div className={styles.hireTalentPage}>
      <h1>Hire Top Talent</h1>
      <p>Find the best freelancers and professionals for your projects.</p>

      <section className={styles.section}>
        <h2>Our Talent Categories</h2>
        <ul>
          <li>Software Developers</li>
          <li>Graphic Designers</li>
          <li>Content Writers</li>
          <li>Marketing Experts</li>
          <li>Virtual Assistants</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Why Hire Through Us?</h2>
        <p>We provide:</p>
        <ul>
          <li>Verified professionals</li>
          <li>Secure payment options</li>
          <li>AI-powered matching</li>
          <li>Project management tools</li>
        </ul>
      </section>

      <button className={styles.browseButton}>Browse Talent</button>
    </div>
  );
};

export default HireTalent;