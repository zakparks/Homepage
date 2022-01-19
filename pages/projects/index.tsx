import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css";

const Social: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Zachary Parks's Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>

        <p className={styles.description}>
          Various projects, personal and professional, and the reasonings behind
          them.
        </p>

        <div className={styles.grid}>
          <Link href="/projects/redditizer">
            <a rel="noreferrer" className={`${styles.card} ${styles.card1}`}>
              <h2>Redditizer &rarr;</h2>
              <p>A C# Discord bot to link mentioned subreddits.</p>
            </a>
          </Link>

          <Link href="#">
            <a rel="noreferrer" className={`${styles.card} ${styles.card2}`}>
              <h2>Project 2 &rarr;</h2>
              <p>Project description 2</p>
            </a>
          </Link>

          <Link href="#">
            <a
              href="#"
              rel="noreferrer"
              className={`${styles.card} ${styles.card3}`}
            >
              <h2>Project 3 &rarr;</h2>
              <p>Project description 3</p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Social;
