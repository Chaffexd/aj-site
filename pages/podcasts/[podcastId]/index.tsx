import LeftArrow from "@/components/Icons/LeftArrow";
import { getAllPodcasts, getSinglePodcast } from "@/lib/contentful";
import { richTextOptions } from "@/lib/richTextOpts";
import { formatDate } from "@/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import ShareIcon from "@/components/Icons/ShareIcon";

// @ts-expect-error ignore the type at the top
const PodcastDetailPage = ({ podcast }) => {

  const {
    episodeTitle,
    episodeNumber,
    dateOfEpisode,
    description,
    genres,
    podcastFile,
    podcastPlaceholderImage,
  } = podcast?.items[0]?.fields;

  return (
    <section className="lg:w-8/12 w-full max-w-4xl m-auto bg-sky-900 p-8 rounded-md mb-20">
      <Head>
        <title>{`${episodeTitle} - Episode #${episodeNumber} | Sunday Dinner`}</title>
        <meta
          name="description"
          content={`Listen to episode ${episodeNumber} of Sunday Dinner: ${episodeTitle}.`}
        />
        <meta
          property="og:title"
          content={`${episodeTitle} - Episode #${episodeNumber} | Sunday Dinner`}
        />
        <meta
          property="og:description"
          content={`Join us for episode ${episodeNumber} titled ${episodeTitle}.`}
        />
        <meta
          property="og:image"
          content={`https:${podcastPlaceholderImage?.fields?.file?.url}`}
        />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={genres?.join(", ")} />
        <meta
          property="og:audio"
          content={`https:${podcastFile?.fields?.file?.url}`}
        />
      </Head>
      <Link href={"/podcasts"} className="w-[25px] block">
        <LeftArrow />
      </Link>
      <div className="mt-6 flex flex-col sm:flex-row">
        <Image
          src={`https:${podcastPlaceholderImage?.fields?.file?.url}`}
          alt="Photo of AJ"
          width={100}
          height={100}
          className="rounded-md mr-4"
        />
        <div>
          <h1 className="font-bold text-2xl mb-2">Sunday Dinner</h1>
          <h2 className="text-4xl font-bold mb-2">
            {episodeTitle} - #{episodeNumber}
          </h2>
          <time className="text-lg">{formatDate(dateOfEpisode)}</time>
        </div>
      </div>
      <div className="mt-8 w-full">
        <audio controls className="w-full mb-6">
          <source src={`https:${podcastFile?.fields?.file?.url}`} />
        </audio>
        <div className="flex items-center">
          {genres.map((genre: string, index: number) => (
            <span className="mr-2 bg-sky-700 p-2 rounded-full text-sm font-bold" key={index}>
              {genre}
            </span>
          ))}
          <ShareIcon />
        </div>
      </div>
      <div>
        <h3 className="font-xl font-bold mt-8 mb-4">Description</h3>
        {description && documentToReactComponents(description, richTextOptions)}
      </div>
    </section>
  );
};

export default PodcastDetailPage;

// Fetch all paths for dynamic routes
export async function getStaticPaths() {
  const podcasts = await getAllPodcasts(); // Fetch all podcasts

  const paths = podcasts.items.map((podcast) => ({
    params: { podcastId: podcast.fields.slug },
  }));

  return {
    paths, // Return the paths to be generated
    fallback: "blocking", // Generate pages not in paths on demand
  };
}

// Fetch data for a specific podcast based on the dynamic route
export async function getStaticProps({
  params,
}: {
  params: { podcastId: string };
}) {
  const podcast = await getSinglePodcast(params.podcastId); // Fetch a single podcast using the slug

  return {
    props: {
      podcast,
    },
  };
}
