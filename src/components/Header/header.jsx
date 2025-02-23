import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>TrustWork.AI</div>
      <nav className={styles.nav}>
        <Link to="/">Find Talent</Link>
        <Link to="/">Find Work</Link>
        <Link to="/">Why TrustWork.AI?</Link>
        <Link to="/">Connect with Us</Link>
        <Link to="/">FAQs</Link>
      </nav>
    </header>
  );
};

export default Header;
