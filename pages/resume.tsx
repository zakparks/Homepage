import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Collapsible from "../components/collapse";

const Redditizer: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Redditizer Discord Bot" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Resume</h1>
        <p className={styles.description}>
          <Link href="https://1drv.ms/w/s!AgNvzV-QN4CFgbhELYVD8rmgE1Zbdw?e=wKo9Su">
            <a target="_blank" rel="noreferrer">
              <p>
                Download as Word document <Image src="/download_w.svg" alt="Download Icon" width="18" height="18" />
              </p>
            </a>
          </Link>
        </p>

        <Collapsible title="Mid Atlantic Capital Group - Software Developer (Feb 2021 - Present)">
          <div className={styles.cardContainer}>
            <div className={styles.grid}>
              <div className={styles.longCard}>
                <h2>Tools and Technologies:</h2>
                <ul>
                  <li>C# .NET (Framework 4.5 and .NET 6)</li>
                  <li>Visual Basic .NET</li>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Azure Functions 4</li>
                  <li>Azure Devops and TFS source control</li>
                  <li>SQL Server &amp; SSMS</li>
                  <li>Visual Studio 2019/2022</li>
                  <li>Git using GitKraken</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.longCard} `}>
              <h2>Tasks:</h2>
              <ul>
                <li>
                  Create, configure, and deploy various Azure Functions (.NET 6, Azure Functions 4) in a synchronized workflow to ingest
                  data from multiple clients, process them in Blob Storage, and then SFTP the results to other clients. The main function I
                  worked on read CSV files, translated them to a different format based on a configurable JSON file, saved them as a
                  pipe-delimited CSV file, and upload to a destination blob storage container.
                </li>
                <li> Modify and bug fix frontend components on the newly built Advisor Portal site (React + Typescript)</li>
                <li>
                  Fully rewrite functionality from legacy VB .NET codebases in C# .NET 6, while keeping the production environment stable
                  for these processes.
                </li>
              </ul>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Elsevier - Software Developer (Feb 2020 - Dec 2021)">
          <div className={styles.cardContainer}>
            <div className={styles.grid}>
              <div className={styles.longCard}>
                <h2>Tools and Technologies:</h2>
                <ul>
                  <li>C# .NET (Framework 4.5)</li>
                  <li>ASP.NET Razor Pages</li>
                  <li>JQuery</li>
                  <li>HTML/CSS using Bootstrap</li>
                  <li>Jenkins</li>
                  <li>Visual Studio 2019</li>
                  <li>Git using GitKraken</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.longCard} `}>
              <h2>Tasks:</h2>
              <ul>
                <li>
                  Created, updated and added new features to the backend of ASP.NET MVC Razor pages for internal content creation and
                  management sites.
                </li>
                <li>Modified and create frontend components using CSS/Bootstrap, jQuery, and Razor.</li>
                <li>Wrote unit tests for new features and wrote tests for a backlog of existing code that had no tests.</li>
              </ul>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Bombardier Transportation - Software Engineer (Sept 2018 - Feb 2020)">
          <div className={styles.cardContainer}>
            <div className={styles.grid}>
              <div className={styles.longCard}>
                <h2>Tools and Technologies:</h2>
                <ul>
                  <li>C# .NET (Framework 3.5 and up)</li>
                  <li>Jenkins with Cake Build</li>
                  <li>Visual Studio 2015/2019</li>
                  <li>Git (via Gerrit Code Review) using Git Extensions</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.longCard} `}>
              <h2>Tasks:</h2>
              <ul>
                <li>
                  Created a standard template and workflow for all projects on the team for automated builds using Jenkins, Cake, and
                  PowerShell, which integrates with our Gerrit Git repository and places all builds on a local NuGet server.
                </li>
                <li>
                  Analyzed and merged the two main simulation projects, by expanding common classes, data models, and logic models in the
                  largest project, and adding other components from the second one in.
                </li>
              </ul>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Bombardier Transportation - Junior Software Engineer (Oct 2015 - Sept 2018)">
          <div className={styles.cardContainer}>
            <div className={styles.longCard}>
              <h2>Tasks:</h2>
              <ul>
                <li>Develop/maintain C# simulation software used to test the CITYFLO 650 driverless train system in a lab environment.</li>
                <li>
                  Rewrite and refactor simulator codebases for maintainability, performance, and to make the addition of new features
                  easier.
                </li>
                <li>Hold and participate in both code reviews and biweekly sprint planning/retrospective meetings.</li>
                <li>Add features to simulators from both project requirements and internal requests from testers or other users.</li>
                <li>
                  Held a point-of-contact role to manage, direct, and ensure the delivery of a project from our sister team in India, then
                  implement their solution in our lab environment for formal testing.
                </li>
                <li>Create and update technical documents, manuals, software requirements and other documentation.</li>
              </ul>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="M*Modal LTD - Software Support Engineer (June 2013 - Sept 2018)">
          <div className={styles.cardContainer}>
            <div className={styles.grid}>
              <div className={styles.longCard}>
                <h2>Tools and Technologies:</h2>
                <ul>
                  <li>C# .NET</li>
                  <li>Python</li>
                  <li>Jenkins</li>
                  <li>Visual Studio 2015</li>
                  <li>SQL Server Management Studio</li>
                  <li>Atlassian Jira/Confluence</li>
                  <li>Apache/Linux server systems </li>
                </ul>
              </div>
            </div>

            <div className={`${styles.longCard} `}>
              <h2>Tasks:</h2>
              <ul>
                <li>Supported our client&apos;s developers who used our APIs to help with bug/issues in their applications</li>
                <li>Wrote/modified internal tools and scripts using both C# and Python to automate and quicken tasks</li>
                <li>Supported end users of our recognition software to determine if there were software bugs or recognition issues</li>
                <li>
                  Assisted DevOps team to maintain the integrity of backend infrastructure, mostly Linux webservers and other internal voice
                  transcription servers (Windows Server 2008 and Linux)
                </li>
              </ul>
            </div>
          </div>
        </Collapsible>
      </main>
    </div>
  );
};

export default Redditizer;
