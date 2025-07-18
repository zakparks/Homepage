import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>What did you do</title>
        <meta name="description" content="404 page" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.title}>404 :(</h1>
          <hr className={styles.hr} />

          <p className={styles.description}>You broke it</p>
          <Image src="images/this-is-fine.gif" alt="this-is-fine.gif" width={150} height={150} />
        </div>
      </main>
    </div>
  );
}
