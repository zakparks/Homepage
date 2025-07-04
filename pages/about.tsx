import { NextPage } from "next";
import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/about.module.css";
import Collapsible from "../components/collapse";
import IconLink from "../components/IconLink";

const About: NextPage = () => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Resume" />
      </Head>
      <main className={homeStyles.main}>
        <div className={homeStyles.intro}>
          <div className={styles.headerRow}>
            <h1 className={homeStyles.title}>About Me</h1>
          </div>
          <hr className={homeStyles.hr} />
        </div>

        {/* Programming */}
        <div className={homeStyles.content}>
          <div className={`${styles.mainCard} ${styles.card1}`}>
            <h1>Off the job development</h1>
            <p>
                While my github may not show a ton of activity, I do enjoy tinkering with code and personal projects.
                Other than this site, I will on a whim make calculators, game solvers, and more. I tinker with Docker
                and containerization on my home PC to run various automations and home server tools like Syncthing for
                data backups.
            </p>
          </div>

            {/* CCC */}
          <div className={`${styles.mainCard} ${styles.card2}`}>
            <h1>Canonsburg Cake Company</h1>
            <p className={styles.date}>(Sept 2021 - Present)</p>
            <div className={styles.bulletGroup}>
              <div className={styles.bulletWrapper}>
                <div className={styles.bulletPoint} />
                <div className={styles.bulletLine} />
              </div>
            </div>
            
            <p>
              In 2021, my wife turned her hobby of baking cakes and cupcakes into a proper licenced business, and it
              rapidly took off. We certified our home kitchen to start out, and within 6 months she had left her day job
              to open a brick and mortar store in the heart of our hometown. I helped with carpentry and building out the
              space, and currently work there for events, weekends, and other things here and there. Although mostly I 
              just go down and eat cookies off the shelf lol.
            </p>
          </div>

          {/* Other */}
          <div className={`${styles.mainCard} ${styles.card2}`}>
            <h1>Outside of programming</h1>
            <p className={styles.date}>(Feb 2021 - May 2022)</p>
            <h3>Hobbies:</h3>
            <ul>
              <li>Photography. </li>
              <li>Music/Arranging</li>
            </ul>
            
            <Collapsible title="Canonsburg Cake Company">
            <p>
              eat cookies
            </p>
            </Collapsible>
          </div>

          {/* Accolades */}
          <div className={`${styles.mainCard} ${styles.card2}`}>
            <h1>Accolades</h1>
            <div className={styles.bulletGroup}>
              <div className={styles.bulletWrapper}>
                <div className={styles.bulletPoint} />
                <div className={styles.bulletLine} />
              </div>
              <div className={styles.bulletContent}>
                <h2>Boy Scouts of America: Eagle Scout</h2>
                <p className={styles.date}>(1998 - Apr 2009)</p>
              </div>
            </div>
            
            <Collapsible title="Eagle Scout Project">
            <p>
              Down the road from my childhood home was a park and pavillion owned by Lion's Club International that my
              family and I would often walk down to. For my project, I did renovations on the park including building new
              horeshoe pits, painting the pavillion, building an access ramp to a trail, and rebuilding their fence.
            </p>
            </Collapsible>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
