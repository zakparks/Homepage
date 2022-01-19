import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Zachary Parks's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Zachary Parks - Developer</h1>

        <p className={styles.description}>
          Hello there
          <a href="https://www.youtube.com/watch?v=rEq1Z0bjdwc" target="_blank">
            .
          </a>
        </p>

        <Link href="/projects">
          <a className={`${styles.card} ${styles.card1}`}>
            <h2>Projects &rarr;</h2>
            <p>Personal Projects and professional work.</p>
          </a>
        </Link>

        <Link href="/resume">
          <a className={`${styles.card} ${styles.card2}`}>
            <h2>Resume &rarr;</h2>
            <p>
              A fancy, web-based version of the paper you probably got this link
              from.
            </p>
          </a>
        </Link>

        <Link href="/socials">
          <a className={`${styles.card} ${styles.card3}`}>
            <h2>Socials &rarr;</h2>
            <p>Creep on me with the power of the internet.</p>
          </a>
        </Link>

        <Link href="">
          <a className={`${styles.card} ${styles.card4}`}>
            <h2>About me &rarr;</h2>
            <p>What I do and what I'm good at.</p>
          </a>
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
