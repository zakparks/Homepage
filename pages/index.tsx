import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Zachary Parks's Portfolio" />
        <link rel="" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Zachary Parks - Developer</h1>

        <p className={styles.description}>
          Hello there
          <a href="https://www.youtube.com/watch?v=rEq1Z0bjdwc" target="_blank" rel="noreferrer">
            .
          </a>
        </p>

        <Link href="/projects" className={`${styles.longCard} ${styles.card1}`}>

          <h2>Projects &rarr;</h2>
          <p>Personal Projects and professional work.</p>

        </Link>

        <Link href="/resume" className={`${styles.longCard} ${styles.card2}`}>

          <h2>Resume &rarr;</h2>
          <p>My employment history.</p>

        </Link>

        <Link href="/socials" className={`${styles.longCard} ${styles.card3}`}>

          <h2>Socials &rarr;</h2>
          <p>Creep on me with the power of the internet.</p>

        </Link>

        <Link href="/404" className={`${styles.longCard} ${styles.card4}`}>

          <h2>About me &rarr;</h2>
          <p>What I like to do, in and out of the job.</p>

        </Link>
      </main>
    </div>
  );
};

export default Home;
