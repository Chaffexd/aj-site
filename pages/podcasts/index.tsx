import Podcast from "@/components/Podcast";
import { getAllPodcasts } from "@/lib/contentful";
import React from "react";

const PodcastsPage = ({ podcasts }) => {

  return (
    <section>
      <div>
        <h1 className="text-5xl mb-12">
          Welcome to the{" "}
          <span className="font-bold italic">Sunday Dinner Podcast</span>
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
      <div className="mt-12 pr-96">
        <h3 className="text-3xl font-bold mb-4">All Episodes</h3>
        <div>
          {podcasts.items.map((podcast: any) => (
            <Podcast podcastData={podcast} key={podcast.sys.id}/>
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
