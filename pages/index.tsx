import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
      <div className="h-screen snap-y snap-mandatory bg-[url('../public/background.png')] bg-repeat overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-violet7/80 scrollbar-corner-gray-400/20">
        <Head>
          <title>Abdoulaye's Portfolio</title>
        </Head>

        <Header />

        <Main />

        { /* Problem scroll: h-screen block useScroll() */ }
        <Footer />
      </div>
  );
}
