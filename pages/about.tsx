import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/about.module.css";
import Collapsible from "../components/collapse";
import Carousel from "../components/carousel";
import ImageData from "../models/ImageData";
import IconLink from "../components/IconLink";

const About: NextPage = () => {
  const imageList: ImageData[] = [
    {
      src: "/images/photography/golden-gai.jpg",
      title: "Golden Gai, Tokyo, Japan",
      alt: "Golden Gai, Tokyo, Japan",
    },
    {
      src: "/images/photography/eclipse.jpg",
      title: "Total Solar Eclipse",
      alt: "Diagnonal Composite shot of the 2024 Total Solar Eclipse",
    },
    {
      src: "/images/photography/venice.jpg",
      title: "Venice, Italy",
      alt: "Gondalier in Venice, Italy",
    },
    {
      src: "/images/photography/amalfi.jpg",
      title: "Amalfi Coast, Italy",
      alt: "Amalfi Coast, Italy",
    },
    {
      src: "/images/photography/jellyfish.jpg",
      title: "Jellyfish",
      alt: "Jellyfish",
    },
    {
      src: "/images/photography/redwoods.jpg",
      title: "Giant Redwood Tree",
      alt: "Huge Redwood tree in the fog, California",
    },
  ];

  // toggle colors on mobile
  useEffect(() => {
    const cards = document.querySelectorAll(".jobDesc");

    const handleTouch = (e: TouchEvent) => {
      const touchedCard = (e.target as HTMLElement).closest(".jobDesc");
      if (touchedCard) {
        // Remove .touched from all other cards
        cards.forEach((c) => c.classList.remove("touched"));
        touchedCard.classList.add("touched");
      }
    };

    // Listen to any touch interaction (start, move, end)
    document.addEventListener("touchstart", handleTouch, { passive: true });
    document.addEventListener("touchmove", handleTouch, { passive: true });
    document.addEventListener("touchend", handleTouch, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouch);
      document.removeEventListener("touchmove", handleTouch);
      document.removeEventListener("touchend", handleTouch);
    };
  }, []);

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

        <div className={homeStyles.content}>
          {/* CCC */}
          <div className={`${styles.mainCard} ${styles.card1}`} tabIndex={0}>
            <h1>Canonsburg Cake Company</h1>
            <p className={styles.date}>(Sept 2021 - Present)</p>
            
            <p>
              In 2021, my wife turned her hobby of baking cakes and cupcakes into a proper licenced business, and it
              rapidly took off. We certified our home kitchen to start out, and within 6 months she had left her day job
              to open a brick and mortar store in the heart of our hometown. I helped then with carpentry and building out the
              space, and currently work there for events, weekends, and other things here and there. 
            </p>
            <p>
              Check us out at <a href="https://www.canonsburgcakecompany.com">canonsburgcakecompany.com</a>. &nbsp;
              <IconLink
                href="https://www.facebook.com/CanonsburgCakeCompany"
                alt="Facebook"
                defaultSrc="/images/fb.png"
                hoverSrc="/images/fb_color.png"
              /> &nbsp;
              <IconLink
                href="https://www.instagram.com/canonsburgcakecompany/"
                alt="Instagram"
                defaultSrc="/images/insta.png"
                hoverSrc="/images/insta_color.png"
              /> &nbsp;
              <IconLink
                href="https://www.tiktok.com/@canonsburgcakecompany/"
                alt="TikTok"
                defaultSrc="/images/tiktok.png"
                hoverSrc="/images/tiktok_color.png"
              />
            </p>
          </div>

          {/* Hobbies */}
          <div className={`${styles.mainCard} ${styles.card2}`} tabIndex={1}>
            <h1>Hobbies and Interests</h1>
            
            <Collapsible title="Music and Arranging">
            <p>
              I played my first instrument in 4th grade, playing trumpet like my dad did. Since then, I've played trumpet
              in my high school/college marching bands and jazz bands, community bands after graduation, brass quintets, 
              and more. To keep the creative musical outlet when I'm not in a band, I enjoy arranging music from all sorts 
              of genres for jazz band, brass quintet, or piano. I have an <a href="https://musescore.com/user/35703472">
              active profile on MuseScore.com</a>, a community driven site and application for writing and sharing sheet music.
            </p>
            </Collapsible>
            <Collapsible title="Travel and Photography">
            <p>
              I love travelling to new places and taking photos, mostly nature, landscape, and cityscapes. I originally 
              shot with a Sony a6000, and after a few years of using that I switched to a Nikon D7200. 
            </p>
            <Carousel images={imageList} />
            </Collapsible>
          </div>

          {/* Accolades */}
          <div className={`${styles.mainCard} ${styles.card3}`} tabIndex={2}>
            <h1>Accolades</h1>
            <h2>Boy Scouts of America: Eagle Scout</h2>
            <p className={styles.date}>(1998 - Apr 2009)</p>
            <br />
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
