import Image from "next/image";
import Link from "next/link";
import React from "react";

// @ts-expect-error ignore the type at the top
const Podcast = ({ podcastData }) => {

  if (!podcastData) return <p>Loading...</p>;

  const {
    episodeNumber,
    episodeTitle,
    slug,
    podcastPlaceholderImage,
    genres,
  } = podcastData?.fields;

  return (
    <Link
      href={`/podcasts/${slug}`}
      className="w-full bg-sky-900 hover:bg-sky-800 rounded-md p-4 flex"
    >
      <Image
        src={`https:${podcastPlaceholderImage?.fields?.file?.url}`}
        width={100}
        height={100}
        alt="Image of AJ"
        className="rounded-md mr-4"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl mb-4">
          {episodeTitle} - #{episodeNumber}
        </h1>
        <div className="">
          {genres.map((genre: string, index: number) => (
            <span className="mr-2 mb-2 bg-sky-700 p-2 rounded-full text-sm font-bold" key={index}>{genre}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Podcast;
