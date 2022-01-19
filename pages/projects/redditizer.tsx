import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Redditizer: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zachary Parks</title>
        <meta name="description" content="Redditizer Discord Bot" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Redditizer</h1>
        <p className={styles.description}>A Discord bot to link subreddits.</p>

        <div className={styles.grid}>
          <div className={`${styles.shortCard} ${styles.card1}`}>
            <h2>Technologies used:</h2>
            <p>
              <ul>
                <li>C# .NET 4.6.1</li>
                <li>RedditSharp (C# wrapper for the Reddit API)</li>
                <li>DSharpPlus (C# wrapper for the Discord API)</li>
              </ul>
            </p>
          </div>
          <div className={`${styles.shortCard} ${styles.card2}`}>
            <h2>Year made/current status:</h2>
            <p>
              <ul>
                <li>Created 2018</li>
                <li>Feature complete/finished. Also, disused.</li>
              </ul>
            </p>
          </div>
        </div>

        <Image
          src="/public/images/projects/redditizer/sampleDiscordEmbed.png"
          alt="Screenshot of Bot Embed"
          className={styles.img}
          width="643"
          height="226"
        />

        <div className={`${styles.longCard} ${styles.card3}`}>
          <h2>What it is:</h2>
          <p>
            This is a Discord bot that can either be run locally or on a remote server. After adding it as a bot/user on Reddit and Discord,
            it will passively read through comments from users in Discord. If it detects a subreddit mention (ex /r/aww or r/news) it will
            create an embed, and reply with that embed to the channel.
          </p>
          <br />
          <p>
            Features of the app include:
            <ul>
              <li>Commands to get links to top posts of a subreddit</li>
              <li>NSFW subreddit detection, to prevent any thumbnails in the embed from from showing NSFW content.</li>
            </ul>
          </p>
        </div>

        <div className={`${styles.longCard} ${styles.card4}`}>
          <h2>Why I made it:</h2>
          <p>
            My friends and I switched from Facebook Messanger to Discord in mid 2017, and slowly ramped up and broadened our usage of
            Discord&apos;s feature set. By the time this idea was incepted, we had all sorts of bots running and someone had a thought,
            &quot;I wonder if there&apos;s a bot to link subreddits I don&apos;t know about when people mention them&quot;. There
            weren&apos;t any good options we could find, so I raced a friend to build one first, mine in C# and his in JavaScript.
          </p>
          <br />
          <p>
            We hosted them on his Azure instance, and after trialing both of them for a week or so, we determined as a group that we talk
            about/post way too many reddit links and didn&apos;t want the bot spam anymore. All in all, it worked very well and was a quick,
            fun way to learn working with new API&apos;s.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Redditizer;
