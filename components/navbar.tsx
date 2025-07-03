import styles from "../styles/Home.module.css";
import Link from "next/link";
import IconLink from "../components/IconLink";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarSection}>
          <Link className={`${styles.navbarLink} ${styles.card1}`} href="/">Home</Link>
          <Link className={`${styles.navbarLink} ${styles.card2}`} href="/projects">Projects</Link>
          <Link className={`${styles.navbarLink} ${styles.card3}`} href="/resume">Resume</Link>
          <Link className={`${styles.navbarLink} ${styles.card4}`} href="/about">About Me</Link>
        </div>

        <div className={styles.navbarSection}>
          <IconLink
            href="https://www.linkedin.com/in/zacharyparks/"
            alt="LinkedIn"
            defaultSrc="/images/linkedin.png"
            hoverSrc="/images/linkedin_color.png"
          />
          <IconLink
            href="https://github.com/zakparks"
            alt="GitHub"
            defaultSrc="/images/github.png"
            hoverSrc="/images/github_color.png"
          />
          <IconLink
            href="https://www.instagram.com/speedofdark8"
            alt="Instagram"
            defaultSrc="/images/insta.png"
            hoverSrc="/images/insta_color.png"
          />
        </div>
    </div>
  );
};

export default Navbar;
