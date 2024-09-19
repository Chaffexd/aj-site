import { getAllBlogPosts, getSingleBlogPost } from "@/lib/contentful";
import Image from "next/image";
import React from "react";
import { richTextOptions } from "@/lib/richTextOpts";
import { formatDate } from "@/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ShareIcon from "@/components/Icons/ShareIcon";
import Link from "next/link";
import LeftArrow from "@/components/Icons/LeftArrow";
import Head from "next/head";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const BlogDetailPage = ({ blog }) => {

  const {
    content,
    coverImage,
    dateOfEntry,
    genres,
    title,
    relatedPosts,
  } = blog?.items[0]?.fields;

  return (
    <section className="max-w-4xl m-auto mb-20">
      <Head>
        <title>{`${title} | Member of the Black Empire`}</title>
        <meta
          name="description"
          content={`An entry to my blog about being a member of the Black Empire.`}
        />
        <meta
          property="og:title"
          content={`${title} | Member of the Black Empire`}
        />
        <meta
          property="og:description"
          content={`An entry to my blog about being a member of the Black Empire.`}
        />
        <meta
          property="og:image"
          content={`https:${coverImage?.fields?.file?.url}`}
        />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={genres?.join(", ")} />
      </Head>
      <Link href={"/blog"} className="w-[25px] block mb-4">
        <LeftArrow />
      </Link>
      <div className="w-full">
        <time className="mb-2 font-bold block">{formatDate(dateOfEntry)}</time>
        {coverImage && <Image
          src={`https:${coverImage?.fields?.file?.url}`}
          alt="Cover image for blog"
          height={300}
          width={400}
          className="bg-fit bg-center w-full h-[400px]"
        />}
        <h1 className="text-center font-bold text-4xl mt-4 mb-10 text-amber-500">
          {title}
        </h1>
        <div className="mb-8">
          {content && documentToReactComponents(content, richTextOptions)}
        </div>
      </div>
      <div className="flex items-center mb-10">
        {genres.map((genre: string, index: number) => (
          <span
            className="mr-2 bg-sky-700 p-2 rounded-full text-sm font-bold"
            key={index}
          >
            {genre}
          </span>
        ))}
        <ShareIcon />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-2xl mb-4">More posts from me...</p>
        {relatedPosts && relatedPosts.length > 1 ?
          relatedPosts.map((relatedPost: any) => (
            <Link href={`/blog/${relatedPost.fields.slug}`} className="mb-4 bg-amber-500 rounded-md p-4 font-bold hover:bg-amber-600">
              {relatedPost.fields.title}
            </Link>
          )) : <p className="font-bold">Coming soon...</p>}
      </div>
    </section>
  );
};

export default BlogDetailPage;

// Fetch all paths for dynamic routes
export async function getStaticPaths() {
  const blogs = await getAllBlogPosts(); // Fetch all podcasts

  const paths = blogs.items.map((blog) => ({
    params: { blogId: blog.fields.slug },
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
  params: { blogId: string };
}) {
  const blog = await getSingleBlogPost(params.blogId); // Fetch a single podcast using the slug

  return {
    props: {
      blog,
    },
  };
}
