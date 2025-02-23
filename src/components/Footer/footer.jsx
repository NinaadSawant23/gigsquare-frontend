import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Column Sections */}
        <div className={styles.footerColumns}>
          <div className={styles.column}>
            <h4>For Clients</h4>
            <ul>
              <li>How to hire</li>
              <li>Talent Marketplace</li>
              <li>Project Catalog</li>
              <li>Hire an agency</li>
              <li>Enterprise</li>
              <li>Business Plus</li>
              <li>Any Hire</li>
              <li>Contract-to-hire</li>
              <li>Direct Contracts</li>
              <li>Hire worldwide</li>
              <li>Hire in the USA</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>For Talent</h4>
            <ul>
              <li>How to find work</li>
              <li>Direct Contracts</li>
              <li>Find freelance jobs worldwide</li>
              <li>Find freelance jobs in the USA</li>
              <li>Win work with ads</li>
              <li>Exclusive resources with Freelancer Plus</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li>Help & support</li>
              <li>Success stories</li>
              <li>TrustWork.AI reviews</li>
              <li>Resources</li>
              <li>Blog</li>
              <li>Affiliate program</li>
              <li>Free Business Tools</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Leadership</li>
              <li>Investor relations</li>
              <li>Careers</li>
              <li>Our impact</li>
              <li>Press</li>
              <li>Contact us</li>
              <li>Partners</li>
              <li>Trust, safety & security</li>
              <li>Modern slavery statement</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Legal Section */}
        <div className={styles.footerBottom}>
          <div className={styles.socialMedia}>
            <span>Follow us</span>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>

          <div className={styles.legal}>
            <p>© 2015 - 2025 TrustWork.AI® Global Inc.</p>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>CA Notice at Collection</li>
              <li>Cookie Settings</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className={styles.mobileApp}>
            <span>Mobile app</span>
            <i className="fab fa-apple"></i>
            <i className="fab fa-android"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
