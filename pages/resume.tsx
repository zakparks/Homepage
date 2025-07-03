import { NextPage } from "next";
import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/resume.module.css";
import Collapsible from "../components/collapse";
import IconLink from "../components/IconLink";

const Resume: NextPage = () => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Resume" />
      </Head>
      <main className={homeStyles.main}>
        <div className={homeStyles.intro}>
          <div className={styles.headerRow}>
            <h1 className={homeStyles.title}>Resume</h1>
            <div className={styles.downloadButton}>
              <span className={styles.downloadText}>Download</span>
              <div className={styles.iconDivider} />
              <IconLink
                href="https://1drv.ms/w/s!AgNvzV-QN4CFgbhELYVD8rmgE1Zbdw?e=wKo9Su"
                alt="Download Word Document"
                defaultSrc="/images/word.png"
                hoverSrc="/images/word_color.png"
                size={20}
              />
              <div className={styles.iconDivider} />
              <IconLink
                href="iDidntGenerateOneYet"
                alt="Download PDF"
                defaultSrc="/images/pdf.png"
                hoverSrc="/images/pdf_color.png"
                size={20}
              />
            </div>
          </div>

          <hr className={homeStyles.hr} />
        </div>

        {/* Talogy */}
        <div className={homeStyles.content}>
          <div className={`${styles.jobDesc} ${styles.card1}`}>
            <h1>Talogy - Senior Software Developer</h1>
            <p className={styles.date}>(May 2022 - Nov 2025)</p>
            <h3>Tasks:</h3>
            <ul>
              <li> Design and build new Angular/.NET Core site, and build the APIs that interface with the existing SQL database.</li>
              <li> Maintain and improve legacy ASP and ASP.NET MVC Razor sites. </li>
            </ul>
            <Collapsible title="Tools and Technologies:">
              <ul>
                <li>C# .NET (Framework 4.8 through .NET Core 8)</li>
                <li>ASP.NET Web Forms</li>
                <li>Classic ASP</li>
                <li>Angular</li>
                <li>Typescript</li>
                <li></li>
                <li>Azure Devops and Pipelines</li>
                <li>SQL Server &amp; SSMS</li>
                <li>Visual Studio 2022</li>
                <li>Git using GitExtensions</li>
              </ul>
            </Collapsible>
          </div>


          {/* Mid Atlantic */}
          <div className={`${styles.jobDesc} ${styles.card2}`}>
            <h1>Mid Atlantic Capital Group - Software Developer</h1>
            <p className={styles.date}>(Feb 2021 - May 2022)</p>
            <h3>Tasks:</h3>
            <ul>
              <li>Create, configure, and deploy various Azure Functions (.NET 6, Azure Functions 4)...</li>
              <li>Modify and bug fix frontend components on the Advisor Portal site (React + Typescript)</li>
              <li>Rewrite legacy VB .NET functionality in C# .NET 6 while keeping production stable.</li>
            </ul>
            <Collapsible title="Tools and Technologies:">
              <ul>
                <li>C# .NET (Framework 4.5 and .NET 6)</li>
                <li>Visual Basic .NET</li>
                <li>React</li>
                <li>Typescript</li>
                <li>Azure Functions 4</li>
                <li>Azure Devops and TFS</li>
                <li>SQL Server &amp; SSMS</li>
                <li>Visual Studio 2019/2022</li>
                <li>Git using GitKraken</li>
              </ul>
            </Collapsible>
          </div>

          {/* Elsevier */}
          <div className={`${styles.jobDesc} ${styles.card3}`}>
            <h1>Elsevier - Software Developer</h1>
            <p className={styles.date}>(Feb 2020 - Dec 2021)</p>
            <h3>Tasks:</h3>
            <ul>
              <li>Added features to backend ASP.NET MVC Razor pages for content management.</li>
              <li>Modified frontend components using CSS/Bootstrap, jQuery, and Razor.</li>
              <li>Wrote unit tests for both new and legacy features.</li>
            </ul>
            <Collapsible title="Tools and Technologies:">
              <ul>
                <li>C# .NET (Framework 4.5)</li>
                <li>ASP.NET Razor Pages</li>
                <li>JQuery</li>
                <li>HTML/CSS using Bootstrap</li>
                <li>Jenkins</li>
                <li>Visual Studio 2019</li>
                <li>Git using GitKraken</li>
              </ul>
            </Collapsible>
          </div>

          {/* Bombardier */}
          <div className={`${styles.jobDesc} ${styles.card4}`}>
            <h1>Bombardier Transportation</h1>
            <div className={styles.bulletGroup}>
              <div className={styles.bulletWrapper}>
                <div className={styles.bulletPoint} />
                <div className={styles.bulletLine} />
              </div>
              <div className={styles.bulletContent}>
                <h2>Software Engineer</h2>
                <p className={styles.date}>(Sept 2018 - Feb 2020)</p>
              </div>
            </div>

            <div className={styles.bulletGroup}>
              <div className={styles.bulletWrapper}>
                <div className={styles.bulletPoint} />
              </div>
              <div className={styles.bulletContent}>
                <h2>Junior Software Engineer</h2>
                <p className={styles.date}>(Oct 2015 - Sept 2018)</p>
              </div>
            </div>

            <h3>Tasks:</h3>
            <ul>
              <li>Created automated Jenkins builds using Cake and PowerShell integrated with Gerrit Git.</li>
              <li>Refactored and merged simulation projects with expanded models and features.</li>
              <li>Maintained C# simulation software for driverless train systems.</li>
              <li>Refactored simulator codebases for performance and maintainability.</li>
              <li>Led and participated in agile ceremonies and team coordination.</li>
              <li>Coordinated with an offshore team and integrated deliverables for formal testing.</li>
              <li>Maintained technical documentation and manuals.</li>
            </ul>
            <Collapsible title="Tools and Technologies:">
              <ul>
                <li>C# .NET (Framework 3.5+)</li>
                <li>Jenkins with Cake Build</li>
                <li>Visual Studio 2015/2019</li>
                <li>Git via Gerrit using Git Extensions</li>
              </ul>
            </Collapsible>
          </div>

          {/* M*Modal */}
          <div className={`${styles.jobDesc} ${styles.card5}`}>
            <h1>M*Modal LTD - Software Support Engineer</h1>
            <p className={styles.date}>(June 2013 - Sept 2018)</p>
            <h3>Tasks:</h3>
            <ul>
              <li>Supported developers using our APIs to debug application issues.</li>
              <li>Wrote internal tools in C# and Python to automate tasks.</li>
              <li>Provided user support and troubleshooting for voice recognition software.</li>
              <li>Assisted DevOps in maintaining Linux and Windows server infrastructure.</li>
            </ul>
            <Collapsible title="Tools and Technologies:">
              <ul>
                <li>C# .NET</li>
                <li>Python</li>
                <li>Jenkins</li>
                <li>Visual Studio 2015</li>
                <li>SQL Server Management Studio</li>
                <li>Jira/Confluence</li>
                <li>Apache/Linux systems</li>
              </ul>
            </Collapsible>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
