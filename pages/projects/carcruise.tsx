import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Carousel from "../../components/carousel";
import ImageData from "../../models/ImageData";
import styles from "../../styles/Home.module.css";

const CarCruise: NextPage = () => {
  const imageList: ImageData[] = [
    {
      src: "/../public/images/projects/carCruise/top10.png",
      title: "Screenshot of top 10 calculator",
      alt: "Screenshot of top 10 calculator",
    },
    {
      src: "/../public/images/projects/carCruise/categories.png",
      title: "Screenshot of categories calculator",
      alt: "Screenshot of categories calculator",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Car Cruise Tally" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Car Cruise Tally</h1>
        <p className={styles.description}>
          Windows apps to tally local car cruise votes. <br />
          View the code on GitHub:{" "}
          <Link href="https://github.com/zakparks/CarCruiseTally_Categories">
            <a target="_blank" rel="noreferrer" className={styles.external}>
              [1]
            </a>
          </Link>{" "}
          <Link href="https://github.com/zakparks/CarCruiseTally">
            <a target="_blank" rel="noreferrer" className={styles.external}>
              [2]
            </a>
          </Link>
        </p>

        <div className={styles.grid}>
          <div className={`${styles.shortCard} ${styles.card1}`}>
            <h2>Technologies used:</h2>
            <p>
              <ul>
                <li>C# .NET 4 through 4.7.2</li>
                <li>XAML</li>
                <li>LINQ</li>
              </ul>
            </p>
          </div>
          <div className={`${styles.shortCard} ${styles.card2}`}>
            <h2>Year made/current status:</h2>
            <p>
              <ul>
                <li>Created 2016</li>
                <li>Feature complete for now</li>
                <li>Yearly updates if needed</li>
              </ul>
            </p>
          </div>
        </div>

        <Carousel images={imageList} />

        <div className={`${styles.longCard} ${styles.card3}`}>
          <h2>What they are:</h2>
          <p>
            These are two C# XAML calculators used to tally custom ballots for local car cruises I help run. Input fields on the left side
            of app match the paper ballots that are handed out to the participants, with tab indexes set for quick entry. Outputs on the
            left show the results. This allows me to quickly enter and tally a couple hundred ballots at a time, while the app filtered out
            categories automatically as each ballot was entered.
          </p>
          <br />
          <p>
            Features of the app include:
            <ul>
              <li>Tab indexing to quickly navigate</li>
              <li>Automatic detection of special category winners</li>
              <li>Automatic exclusion of inelegible cars</li>
            </ul>
          </p>
        </div>

        <div className={`${styles.longCard} ${styles.card4}`}>
          <h2>Why I made it:</h2>
          <p>
            At my job at the time, my responsibilities were being expanded to work on a XAML application. I hadn&apos;t ever worked with it
            at the time so I decided to make something in my spare time to learn the technology. While I recognize a single-user desktop app
            isn&apos;t the most convenient solution for this tallying task, it was valuable at the time to learn XAML.
          </p>
          <p>
            As changes were made year over year to the car cruises and ballots, I would jump back into the codebases to handle the new
            requirements, test out new C# language features I learned or wanted to learn (such as getting better with LINQ), and to play
            &quot;code golf&quot; with an old project.
          </p>
        </div>
      </main>
    </div>
  );
};

export default CarCruise;
