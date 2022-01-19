import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/socials">Socials</Link>
      <Link href="/about">About Me</Link>
    </div>
  );
};

export default Navbar;
