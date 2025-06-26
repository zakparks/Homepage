import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarSection}>
          <Link className={styles.navbarLink} href="/">Home</Link>
          <Link className={styles.navbarLink} href="/projects">Projects</Link>
          <Link className={styles.navbarLink} href="/resume">Resume</Link>
          <Link className={styles.navbarLink} href="/about">About Me</Link>
        </div>

        <div className={styles.navbarSection}>
          <Link href="https://www.linkedin.com/in/zacharyparks/" target="_blank" rel="noopener noreferrer">
            <Image className={styles.navbarIcon} src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
          </Link>
          <Link href="https://github.com/zakparks" target="_blank" rel="noopener noreferrer">
            <Image className={styles.navbarIcon} src="/images/github.png" alt="GitHub" width={20} height={20} />
          </Link>
          <Link href="https://www.instagram.com/speedofdark8" target="_blank" rel="noopener noreferrer">
            <Image className={styles.navbarIcon} src="/images/insta.png" alt="Instagram" width={20} height={20} />
          </Link>
        </div>
    </div>
  );
};

export default Navbar;
