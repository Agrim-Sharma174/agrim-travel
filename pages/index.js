import Header from "../components/Header";
import Head from "next/head";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";

export default function Home({ exploreData, cardsData }) {
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
          {/* There are 2 ways to write the following code: */}

          {/* first way: Without return{}, Its just (item) => (...) */}
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

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere!</h2>
          {/* The 2nd way: With return{}, Its just (item) => {return (...)} */}
          {/* We here are hiding the scroll bar, and we are using overflow-scroll... but for hinding, I am using tailwind framework: tailwind-scrollbar-hide, I first npm i tailwind-scrollbar-hide and then changed tailwind.config.js by adding:
          plugins: [
            require("tailwind-scrollbar-hide")
          ],
          And finally added, scrollbar-hide in this following code */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardsData?.map(({img, title}) => {
            return (
              <MediumCard
                key = {img}
                img = {img}
                title = {title}
              />
            )
          })}
          </div>
        </section>

        <LargeCard 
          img="https://images.unsplash.com/photo-1447160666621-25f14cda2fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
          title ="The Greatest Outdoors"
          description="Whitelist curated by our team of travel experts"
          buttonText="Get Inspired"

        />

      </main>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3000/api/location").then(
    (res) => res.json()
  );

  const cardsData = await fetch("http://localhost:3000/api/middleCards").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
