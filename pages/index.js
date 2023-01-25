import Header from "../components/Header";
import Head from "next/head";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";

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
          {/* The "?" below after exploreData denotes to handle any error, like if there is no exploreData */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3000/api/location").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
