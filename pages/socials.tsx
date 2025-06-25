import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Social: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Zachary Parks's Socials" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Social Media</h1>

        <p className={styles.description}>My graveyard of social media accounts that I barely ever use or post to.</p>

        <Link
          href="https://www.linkedin.com/in/zacharyparks/"
          target="_blank"
          rel="noreferrer"
          className={`${styles.longCard} ${styles.card1}`}>

          <h2>LinkedIn &rarr;</h2>
          <p>My resume that is definitely not copy/pasted out of Word.</p>

        </Link>

        <Link
          href="https://github.com/zakparks"
          target="_blank"
          rel="noreferrer"
          className={`${styles.longCard} ${styles.card2}`}>

          <h2>Github &rarr;</h2>
          <p>Personal projects in varying states of completion/abandonment.</p>

        </Link>

        <Link
          href="https://www.instagram.com/speedofdark8"
          target="_blank"
          rel="noreferrer"
          className={`${styles.longCard} ${styles.card5}`}>

          <h2>Instagram &rarr;</h2>
          <p>
            The exception to the rule. Here lies 37 trillion cat pictures, with occasional other pics to assure my family I still
            exist/leave the house.
          </p>

        </Link>
      </main>
    </div>
  );
};

export default Social;
