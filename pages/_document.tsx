import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Analytics } from '@vercel/analytics/next';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta
            name="keyword"
            content="portfolio, developer, software engineer, javascript, typescript, react, nextjs, angular, dotnet, c#"
          />
          <link rel="manifest" href="/manifest.json" />

          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Zachary Parks - Developer" />
          <meta
            property="og:description"
            content="Portfolio, resume, and information for Zachary Parks, a Pittsburgh, PA based developer."
          />
          <meta property="og:image" content="https://zakparks.dev/images/me.png" />
          <meta property="og:url" content="https://zakparks.dev" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Navbar />
          <Main />
          <NextScript />
          <Footer />
          <Analytics />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
