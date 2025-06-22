import React from "react";
import styles from "../asets/Style/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
        <p className={styles.rightText}>Powered by</p>
      </div>
    </footer>
  );
};

export default Footer;
