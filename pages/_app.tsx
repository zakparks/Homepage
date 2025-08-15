import "../styles/globals.css";
import { AppProps } from "next/app";
import Navbar from "../components//navbar";
import Footer from "../components/footer";
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}

export default MyApp;
