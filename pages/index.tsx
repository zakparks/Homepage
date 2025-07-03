import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Zachary Parks" />
        <link rel="" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Zachary Parks - Full-Stack Developer</h1>
          <hr className={styles.hr} />

          <p className={styles.description}>
            Hello there
            <a href="https://www.youtube.com/watch?v=rEq1Z0bjdwc" target="_blank" rel="noreferrer">
              .
            </a>
          </p>

        </div>
        <div className={styles.content}>

          <Link href="/resume" className={`${styles.longCard} ${styles.card1}`}>
            <h2>Resume &rarr;</h2>
            <p>Details about my employment history.</p>
          </Link>

          <Link href="/projects" className={`${styles.longCard} ${styles.card2}`}>
            <h2>Projects &rarr;</h2>
            <p>Personal Projects and professional work.</p>
          </Link>

          <Link href="/404" className={`${styles.longCard} ${styles.card3}`}>
            <h2>About me &rarr;</h2>
            <p>What I like to do, in and out of the job.</p>
          </Link>
        </div>

      </main>
    </div>
  );
};

export default Home;
