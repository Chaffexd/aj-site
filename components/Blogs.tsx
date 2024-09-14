import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// @ts-expect-error
const Blogs = ({ blogPosts }) => {
  console.log("Blog POST = ", blogPosts);

  const { slug, coverImage, dateOfEntry, title, genres } = blogPosts?.fields;

  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full bg-amber-400 hover:bg-amber-600 rounded-md p-4 flex mb-6"
    >
      <Image
        src={`https:${coverImage?.fields?.file?.url}`}
        width={100}
        height={100}
        alt={`https:${coverImage?.fields?.description}`}
        className="rounded-md mr-4"
      />
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-2xl">{title}</h1>
        <time className="mb-2 font-bold">{formatDate(dateOfEntry)}</time>
        <p>
          {genres && genres.map((genre: string) => (
            <span className="mr-2 bg-amber-500 p-2 rounded-full text-sm font-bold">
              {genre}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default Blogs;
