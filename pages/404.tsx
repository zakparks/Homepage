import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>What did you do</title>
        <meta name="description" content="404 page" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>404 - Page not found</h1>

        <p className={styles.description}>Whatever you clicked, don&apos;t click that. I probably didn&apos;t make that page yet.</p>
      </main>
    </div>
  );
}
