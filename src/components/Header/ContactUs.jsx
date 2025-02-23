import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contactUsPage}>
      <h1>Get in Touch</h1>
      <p>We're here to help! Reach out to us with any questions or feedback.</p>

      <section className={styles.section}>
        <h2>Contact Information</h2>
        <p>Email: support@trustwork.ai</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Main Street, Anytown, USA</p>
      </section>

      <section className={styles.section}>
        <h2>Contact Form</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" className={styles.inputField} />
          <input type="email" placeholder="Your Email" className={styles.inputField} />
          <textarea placeholder="Your Message" className={styles.inputField}></textarea>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;