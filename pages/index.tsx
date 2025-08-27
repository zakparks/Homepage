import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Collapsible from "../components/collapse";
import IconLink from "../components/IconLink";

const Home: NextPage = () => {

  return (
  <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.headerRow}>
            <h1 className={styles.title}>Zachary Parks -<br /> Full-Stack Developer</h1>
            <div className={styles.downloadButton}>
              <span className={styles.downloadText}>Download: </span>
              <div className={styles.iconDivider} />
              <IconLink
                href="/dl/resume-doc"
                alt="Download Word Document"
                defaultSrc="/images/word.png"
                hoverSrc="/images/word_color.png"
                size={20}
              />
              <div className={styles.iconDivider} />
              <IconLink
                href="/dl/resume-pdf"
                alt="Download PDF"
                defaultSrc="/images/pdf.png"
                hoverSrc="/images/pdf_color.png"
                size={20}
              />
            </div>
          </div>

          <hr className={styles.hr} />
        </div>
 
        <div className={styles.content}>
          {/* Talogy */}
          <div className={`${styles.jobDesc} ${styles.card1}`} tabIndex={0}>
            <h1>Talogy - Senior Software Developer</h1>
            <p className={styles.date}>(May 2022 - Nov 2025)</p>
            <h3>Tasks:</h3>
            <ul>
              <li> Design and build new Angular/.NET Core site, and build the APIs that interface with the existing SQL database.</li>
              <li> Maintain and improve legacy ASP and ASP.NET MVC Razor sites. </li>
              <li> Implement a Git strategy and help migrate source control from TFS to Github </li>
              <li> Create and modify Azure Pipelines to build and deploy.</li>
              <li> Implement Application Insights to track application issues </li>
            </ul>
            
            <Collapsible title="Job Details">
              <p>
                At Talogy, my team was responsible for maintaining and modernizing a Legacy ASP + ASP.NET MVC website. The first phase of
                this was to migrate the codebase&apos;s source control from TFS to Github, the application&apos;s hosting into Azure, implementing
                Redgate Flyway for database migrations, replace the build/deploy process with Azure Pipelines, and more. This was an involved
                coordinated effort between our team, the devops team, and the database admin team over the course of a few months to get it 
                fully operational.  
              </p>
              <p> 
                Once that was done, my team focused on improving reliability of the site. Now that it was in Azure and we had Application Insights
                to better analyze logging, I spent time to clean up the code focusing on fixing non-impactful exceptions, rewriting code for
                maintainability, and updating various components, dependancies, and packages to the most modern version possible. In doing so
                I was able to reduce the solution from thousands of warnings and messages to about 40 (most of which remain due to packages we can&apos;t update),
                and removed dozens of exceptions and errors that were clogging App Insights.
              </p>
              <p> 
                The last phase of this was a brand new rewrite of the website. We met with the UX team to collaboratively design new 
                versions of each page and feature in the legacy application that would balance existing functionality with modern 
                UX design. The UX team would develop nearly complete Angular + TS frontend components, and I would write TS services and
                a C# backend API to get data from the existing database using Linq and Entity Framework to use in the frontend (while also modifying the angular components
                when needed). 
              </p>
            </Collapsible>

            <Collapsible title="Tools and Technologies:">
              <ul>
                <li>C# .NET (Framework 4.8 through .NET Core 8)</li>
                <li>Entity Framework Core</li>
                <li>ASP.NET Web Forms</li>
                <li>Classic ASP</li>
                <li>Angular</li>
                <li>Typescript</li>
                <li>Azure Devops and Pipelines</li>
                <li>SQL Server &amp; SSMS</li>
                <li>Visual Studio 2022</li>
                <li>Git using GitExtensions</li>
              </ul>
            </Collapsible>
          </div>

          {/* Mid Atlantic */}
          <div className={`${styles.jobDesc} ${styles.card2}`} tabIndex={1}>
            <h1>Mid Atlantic Capital Group - Software Developer</h1>
            <p className={styles.date}>(Feb 2021 - May 2022)</p>
            <h3>Tasks:</h3>
            <ul>
              <li>Create, configure, and deploy various Azure Functions (.NET 6, Azure Functions 4) in a synchronized workflow to ingest
                  data from multiple clients, process them in Blob Storage, and then SFTP the results to other clients. </li>
              <li>Modify and bug fix frontend components on the Advisor Portal site (React + Typescript)</li>
              <li>Rewrite legacy VB .NET functionality in C# .NET 6 while keeping production stable.</li>
              <li>Advise and implement Agile strategies and workflows on a new team.</li>
            </ul>
            
            <Collapsible title="Job Details">
            <p>
              At Mid Atlantic, I was hired to a newly created team for my experience modernizing old codebases and working in multiple 
              effective teams utilizing Agile and Scrum. On the process side, I advised my team&apos;s Manager and Business Analyst on effective
              ways to run a typical 2-week sprint cycle, including all of the regular ceremonies and ticket management strategies.
            </p>
            <p> 
              On the development side, my long term focus was on uncoupling functionality from an older VB.NET/C# monolith application. My team 
              and I started by taking smaller pieces of the program and moving them to Azure Functions, where they could run independantly 
              of the core application. As an example, the main function I worked on read CSV files, translated them to a different format 
              based on a configurable JSON file, saved them as a pipe-delimited CSV file, and upload to a destination blob storage container. 
              From there, we started to untangle the core application&apos;s main class, creating smaller testable components. 
            </p>
            <p>
              Last, I also helped maintain our Advisor Portal website, the frontend of the application that allowed users
              to access the financial data and tools we build. This was a React and Typescript site.
            </p>
            </Collapsible>

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
          <div className={`${styles.jobDesc} ${styles.card3}`} tabIndex={2}>
            <h1>Elsevier - Software Developer</h1>
            <p className={styles.date}>(Feb 2020 - Dec 2021)</p>
            <h3>Tasks:</h3>
            <ul>
              <li>Created, updated and added new features to the backend of ASP.NET MVC Razor pages for internal content creation and
                  management sites.</li>
              <li>Modified frontend components using CSS/Bootstrap, jQuery, and Razor.</li>
              <li>Wrote unit tests for new and legacy features.</li>
            </ul>
            
            <Collapsible title="Job Details">
            <p>
              With Elsevier I worked on an internal tools team, tasked with updating and maintaining a custom CMS for managing
              medical and technical data. 
            </p>
            </Collapsible>

            <Collapsible title="Tools and Technologies:">
              <ul>
                <li>C# .NET (Framework 4.5)</li>
                <li>Entity Framework</li>
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
          <div className={`${styles.jobDesc} ${styles.card4}`} tabIndex={3}>
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

            <h3>Overview:</h3>
            <ul>
              <li>Created automated Jenkins builds using Cake and PowerShell integrated with Gerrit Git.</li>
              <li>Refactored and merged simulation projects with expanded models and features.</li>
              <li>Maintained C# simulation software for driverless train systems.</li>
              <li>Refactored simulator codebases for performance and maintainability.</li>
              <li>Led and participated in agile ceremonies and team coordination.</li>
              <li>Held a point-of-contact role to manage, direct, and ensure the delivery of a project from our sister team in India, then
                  implement their solution in our lab environment for formal testing.</li>
              <li>Maintained technical documentation and manuals.</li>
            </ul>
            <Collapsible title="Job Details">
              <p>
                As a Junior Software Engineer, I was tasked with maintaining a C# Winforms simulator out of a suite of simulation tools. 
                I took documentation and technical manuals and implemented features and functionality based on those. Part of this
                required coordination with multiple other teams to ensure all of the simulators worked in concert in our lab environment,
                which contained actual train control hardware interfaced with simulation software to emulate a complete rail system.
              </p>
              <p>
                As time went on and after being promoted to a Software Engineer, I spent time working on other simulators within my team,
                notably on the Train Simulator which emulated each train object in the system. This simulator was fairly old, and needed
                to be heavily optimized to increase the number of trains it could handle simulating simultainously. Myself and a subset of
                my team were in charge of getting this upgraded, and were were able to increase the number of trains on the system from about
                a dozen to upwards of 50 at a time by optimizing the codebase.
              </p>
              <p>
                For one project, it was decided that a new simulator was needed. We utilized a sister team we had in India to develop this. 
                I created and edited technical documents and provided it to them, and oversaw their development of the program. Once they
                had it complete I took ownership of it, made final adjustment, and integrated it in to the lab environment for that project.
              </p>
            </Collapsible>
            <Collapsible title="Tools and Technologies:">
              <ul>
                <li>C# .NET (Framework 3.5+)</li>
                <li>Jenkins with Cake Build</li>
                <li>Visual Studio 2015/2019</li>
                <li>Git using Git Extensions</li>
              </ul>
            </Collapsible>
          </div>

          {/* M*Modal */}
          <div className={`${styles.jobDesc} ${styles.card5}`} tabIndex={4}>
            <h1>M*Modal LTD - Software Support Engineer</h1>
            <p className={styles.date}>(June 2013 - Sept 2018)</p>
            <h3>Tasks:</h3>
            <ul>
              <li>Supported developers using our APIs to debug application issues.</li>
              <li>Wrote internal tools in C# and Python to automate tasks.</li>
              <li>Provided user support and troubleshooting for voice recognition software.</li>
              <li>Assisted DevOps in maintaining Linux and Windows server infrastructure (Windoes Server 2008 & Linux).</li>
            </ul>

            <Collapsible title="Job Details">
              <p>
                At M*Modal, I worked on a split Devops and software support team. For support, my responsibilities involved investigating 
                data issues and bugs that end users had as well as troubleshooting API bugs that arose from devolopers using 
                our API. For Devops, I helped maintain and extend C# and Python tools we used for troubleshooting, as well as helping
                where needed with deployments and maintenence of our backend servers.
              </p>
            </Collapsible>
            
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

export default Home;
