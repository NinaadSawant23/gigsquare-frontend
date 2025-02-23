import React from 'react';
import styles from './Payments.module.css';

const Payments = () => {
  return (
    <div className={styles.paymentsPage}>
      <h1>Secure Payments</h1>
      <p>Your transactions are safe and reliable with us.</p>

      <section className={styles.section}>
        <h2>Payment Methods</h2>
        <p>We support a variety of payment options:</p>
        <ul>
          <li>Credit and Debit Cards</li>
          <li>PayPal</li>
          <li>Bank Transfers</li>
          <li>Cryptocurrency (coming soon)</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Escrow Services</h2>
        <p>For added security, we offer escrow services for large projects.</p>
        <p>Funds are held securely until the project is completed to your satisfaction.</p>
      </section>

      <button className={styles.learnMoreButton}>Learn More About Payments</button>
    </div>
  );
};

export default Payments;