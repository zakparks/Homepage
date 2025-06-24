import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Social: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Zachary Parks's Projects" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>

        <p className={styles.description}>Professional Projects:</p>

        <Link href="/projects/pdr">
          <a rel="noreferrer" className={`${styles.longCard} ${styles.card1}`}>
            <h2>Production Detail Report (Mid Atlantic) &rarr;</h2>
            <p>A React/TS page that displays custom transaction details to the user.</p>
          </a>
        </Link>

        <Link href="/projects/csv">
          <a rel="noreferrer" className={`${styles.longCard} ${styles.card2}`}>
            <h2>CSV Conversion Azure Function (Mid Atlantic) &rarr;</h2>
            <p>An Azure Function that transforms and uploads a CSV file in Blob Storage.</p>
          </a>
        </Link>

        <p className={styles.description}>Personal Projects:</p>

        <Link href="/projects/redditizer">
          <a rel="noreferrer" className={`${styles.longCard} ${styles.card1}`}>
            <h2>Redditizer &rarr;</h2>
            <p>A C# Discord bot to link mentioned subreddits.</p>
          </a>
        </Link>

        <Link href="/projects/carcruise">
          <a rel="noreferrer" className={`${styles.longCard} ${styles.card2}`}>
            <h2>Car Cruise Tally &rarr;</h2>
            <p>A pair of C# desktop apps to do custom tallying for local car cruises.</p>
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Social;
