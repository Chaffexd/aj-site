import Podcast from "@/components/Podcast";
import { getAllPodcasts } from "@/lib/contentful";
import Head from "next/head";
import React from "react";

// @ts-expect-error ignore the type at the top
const PodcastsPage = ({ podcasts }) => {
  
  return (
    <section className="px-4 sm:w-8/12 max-w-4xl m-auto mb-20">
      <Head>
        <title>{`Podcasts | Sunday Dinner`}</title>
        <meta
          name="description"
          content={`The Sunday Dinner podcast.`}
        />
        <meta
          property="og:title"
          content={`Podcast | The Sunday Dinner podcast`}
        />
        <meta
          property="og:description"
          content={`A podcast about being black, discussed over Sunday Dinner.`}
        />
      </Head>
      <div>
        <h1 className="text-4xl mb-12">
          Welcome to the <br />
          <span className="font-bold italic text-6xl underline text-amber-400">
            Sunday Dinner Podcast
          </span>
        </h1>
        <h2 className="text-3xl mb-2 font-bold">About</h2>
        <p className="text-lg">
          Life lessons from the greatest thinkers on the planet with Chris
          Williamson. Including guests like David Goggins, Dr Jordan Peterson,
          Sam Harris, Jocko Willink, Dr Andrew Huberman, Dr Julie Smith, Steven
          Bartlett, Ryan Holiday, James Clear, Robert Greene, Balaji Srinivasan,
          Steven Pinker, Alex Hormozi, Douglas Murray, Chris Bumstead, James
          Smith, Dr David Sinclair, Mark Manson and more. Understanding the
          world is hard. This podcast will help.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-4">All Episodes</h3>
        <div>
          { // @ts-expect-error ignore the type at the top
          podcasts.items.map((podcast, index: number) => (
            <Podcast podcastData={podcast} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastsPage;

export async function getStaticProps() {
  const podcasts = await getAllPodcasts();

  return {
    props: {
      podcasts,
    },
  };
}
