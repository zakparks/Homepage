import styles from "../styles/Home.module.css";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© Zak Parks {year}</p>
    </footer>
  );
};

export default Footer;
