import LandingInto from "@/components/LandingInto";
import { getAboutPage } from "@/lib/contentful";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Home({ homePage }) {
  return (
    <section className="w-full max-w-5xl m-auto sm:flex flex-col md:flex-row gap-12 justify-center items-center">
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