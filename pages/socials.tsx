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

        <Link href="https://www.linkedin.com/in/zacharyparks/">
          <a target="_blank" rel="noreferrer" className={`${styles.longCard} ${styles.card1}`}>
            <h2>LinkedIn &rarr;</h2>
            <p>My resume that is definitely not copy/pasted out of Word.</p>
          </a>
        </Link>

        <Link href="https://github.com/zakparks">
          <a target="_blank" rel="noreferrer" className={`${styles.longCard} ${styles.card2}`}>
            <h2>Github &rarr;</h2>
            <p>Personal projects in varying states of completion/abandonment.</p>
          </a>
        </Link>

        <Link href="https://twitter.com/speedofdark8">
          <a target="_blank" rel="noreferrer" className={`${styles.longCard} ${styles.card3}`}>
            <h2>Twitter &rarr;</h2>
            <p>Here&apos;s where I follow some comedy, news, and art stuff.</p>
          </a>
        </Link>

        <Link href="https://twitch.tv/speedofdark8">
          <a target="_blank" rel="noreferrer" className={`${styles.longCard} ${styles.card4}`}>
            <h2>Twitch &rarr;</h2>
            <p>I have streamed games maybe 4 times. When the stars and planets align again catch me playing game here.</p>
          </a>
        </Link>

        <Link href="https://www.instagram.com/speedofdark8">
          <a target="_blank" rel="noreferrer" className={`${styles.longCard} ${styles.card5}`}>
            <h2>Instagram &rarr;</h2>
            <p>
              The exception to the rule. Here lies 37 trillion cat pictures, with occasional other pics to assure my family I still
              exist/leave the house.
            </p>
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Social;
