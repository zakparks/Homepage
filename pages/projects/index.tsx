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
        
        <div className={styles.intro}>
          <div className={styles.content}></div>
          <h1 className={styles.title}>Projects</h1>
          <hr className={styles.hr} />
          <p className={styles.description}>Professional Projects:</p>
        </div>
        
        <div className={styles.content}>

          <Link
            href="/projects/pdr"
            rel="noreferrer"
            className={`${styles.longCard} ${styles.card1}`}>

            <h2>Production Detail Report (Mid Atlantic) &rarr;</h2>
            <p>A React/TS page that displays custom transaction details to the user.</p>

          </Link>

          <Link
            href="/projects/csv"
            rel="noreferrer"
            className={`${styles.longCard} ${styles.card2}`}>

            <h2>CSV Conversion Azure Function (Mid Atlantic) &rarr;</h2>
            <p>An Azure Function that transforms and uploads a CSV file in Blob Storage.</p>

          </Link>

          <p className={styles.description}>Personal Projects:</p>

          <Link
            href="/projects/redditizer"
            rel="noreferrer"
            className={`${styles.longCard} ${styles.card1}`}>

            <h2>Redditizer &rarr;</h2>
            <p>A C# Discord bot to link mentioned subreddits.</p>

          </Link>

          <Link
            href="/projects/carcruise"
            rel="noreferrer"
            className={`${styles.longCard} ${styles.card2}`}>

            <h2>Car Cruise Tally &rarr;</h2>
            <p>A pair of C# desktop apps to do custom tallying for local car cruises.</p>

          </Link>
        </div>
      </main>
    </div>
  );
};

export default Social;
