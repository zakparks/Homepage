import { NextPage } from "next";
import Head from "next/head";
import Carousel from "../../components/carousel";
import ImageData from "../../models/ImageData";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Redditizer: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Redditizer Discord Bot" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>CSV Conversion Azure Function</h1>
        <p className={styles.description}>
          An Azure Function that transforms and uploads a CSV file in Blob Storage. <br />
          View the anonymized function on{" "}
          <Link href="https://github.com/zakparks/Redditizer">
            <a target="_blank" rel="noreferrer" className={styles.external}>
              GitHub.
            </a>
          </Link>
        </p>

        <div className={styles.grid}>
          <div className={`${styles.shortCard} ${styles.card1}`}>
            <h2>Technologies used:</h2>
            <p>
              <ul>
                <li>Azure Functions 4</li>
                <li>Azure Blob Storage</li>
                <li>C# 6.0</li>
                <li>CSVHelper 27.1.1</li>
                <li>CSVHelper 27.1.1</li>
              </ul>
            </p>
          </div>
          <div className={`${styles.shortCard} ${styles.card2}`}>
            <h2>Year made/current status:</h2>
            <p>
              <ul>
                <li>Created 2022</li>
                <li>Feature complete, in production</li>
              </ul>
            </p>
          </div>
        </div>
        <div className={`${styles.longCard} ${styles.card3}`}>
          <h2>What it is:</h2>
          <p>
            This Azure Function is piece of a new effort to take in data from many clients in many forms, arrange all of the disparate data,
            and send the aggregate to another source. Specifically, this app is triggered by an Azure Blob Storage container, is sent large
            CSV files with a table/header format from Company A, identifies and maps the data to the format of Company B, writes a new
            pipe-delimited file, and streams the resulting file to a different Blob Storage container. All of the above is asychronously
            done, and the resulting file is streamed in chunks of a configurable size.
          </p>
          <br />
          <p>
            Features of the app include:
            <ul>
              <li>Dynamic object loading from the input file stream</li>
              <li>Robust block streaming into Azure to prevent upload failures</li>
              <li>Modifying and verifying input metadata to prevent files from being processed twice</li>
              <li>
                Fast runtime (average of XXX ms from when the function is triggered to when the result is uploaded for a 1MB input file)
              </li>
            </ul>
          </p>
        </div>

        <div className={`${styles.longCard} ${styles.card4}`}>
          <h2>What I did:</h2>
          <p>
            I was given the open ended requirement of "translate a CSV in Blob A and make it appear in Blob B". I was given a sample file
            from an Advisor with a rough draft of the input/output CSV formats, and was eventually tasked with coordinating a final design
            of the output based on this. Once I had a final design, I was wrote out the JSON file with the mappings to do the conversion.
            While facilitating that, I researched C# CSV packages and decided on CSVHelper since it is easy to use, well documented,
            open-source, and has a good feature set. Once the function was operational in a test environment, I deployed it to its final
            destination set up by our Cloud Engineer.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Redditizer;
