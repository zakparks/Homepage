import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css";

const Social: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zak Parks&apos;s Socials</title>
        <meta name="description" content="Zak Parks's Projects" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>

        <p className={styles.description}>
          Various projects, personal and professional, and the reasonings behind
          them.
        </p>

        <div className={styles.grid}>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} ${styles.card1}`}
          >
            <h2>Project 1 &rarr;</h2>
            <p>Project description 1</p>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} ${styles.card2}`}
          >
            <h2>Project 2 &rarr;</h2>
            <p>Project description 2</p>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} ${styles.card3}`}
          >
            <h2>Project 3 &rarr;</h2>
            <p>Project description 3</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Social;
