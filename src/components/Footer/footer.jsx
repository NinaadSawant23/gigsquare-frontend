import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Social Media & Legal Section */}
        <div className={styles.footerBottom}>
          <span>.</span>

          <div className={styles.legal}>
            <p>2025     TrustWork.AI</p>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>CA Notice at Collection</li>
              <li>Cookie Settings</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className={styles.mobileApp}>
            <span>.</span>
            <i className="fab fa-apple"></i>
            <i className="fab fa-android"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
