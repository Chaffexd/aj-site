import LandingInto from "@/components/LandingInto";
import { getAboutPage } from "@/lib/contentful";
import Head from "next/head";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Home({ homePage }) {
  return (
    <section className="w-full max-w-5xl m-auto sm:flex flex-col md:flex-row gap-12 justify-center items-center">
      <Head>
        <title>{`MBE | Sunday Dinner`}</title>
        <meta name="description" content={`The home of the Sunday Dinner podcasts and home of of the Black Empire.`} />
        <meta
          property="og:title"
          content={`MBE | The Sunday Dinner podcast`}
        />
        <meta
          property="og:description"
          content={`A podcast about being black, discussed over Sunday Dinner.`}
        />
      </Head>
      <LandingInto homePage={homePage} />
    </section>
  );
}

export async function getStaticProps() {
  const homePage = await getAboutPage("/home");

  return {
    props: {
      homePage,
    },
  };
}
