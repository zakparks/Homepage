import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const CarCruise: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Car Cruise tally applications" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Title</h1>

        <p className={styles.description}>asdf</p>

        <div className={styles.grid}>
          <Link href="#">
            <a target="_blank" rel="noreferrer" className={`${styles.longCard} ${styles.card1}`}>
              <h2>asdf</h2>
              <p>asdf</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CarCruise;
