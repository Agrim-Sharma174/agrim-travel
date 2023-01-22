import Header from "../components/Header";
import Head from "next/head";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agrim-Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main>
        
      </main>

    </>
  );
}
