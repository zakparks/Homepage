import "../styles/globals.css";
import { AppProps } from "next/app";
import Navbar from "../components//navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
