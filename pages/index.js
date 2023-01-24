import Header from "../components/Header";
import Head from "next/head";
import Banner from "@/components/Banner";

export default function Home({ exploreData }) {
  return (
    <>
      <Head>
        <title>Agrim-Travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby!</h2>

          {/* Pulling data from server- API ENDPOINTS */}
          {exploreData?.map(item => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
