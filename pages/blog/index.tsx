import Blogs from "@/components/Blogs";
import { getAllBlogPosts } from "@/lib/contentful";
import Head from "next/head";
import React from "react";

// @ts-expect-error
const BlogPage = ({ blogPosts }) => {
  console.log(
    "All blogs ===",

    blogPosts.items.sort(
      // @ts-expect-error
      (a, b) => new Date(b.fields.dateOfEntry) - new Date(a.fields.dateOfEntry)
    )
  );

  if (!blogPosts) return <h1>Loading...</h1>;

  return (
    <section className="w-8/12 max-w-4xl m-auto mb-20">
      <Head>
        <title>{`Blog | Member of the Black Empire`}</title>
        <meta
          name="description"
          content={`An entry to my blog about being a member of the Black Empire.`}
        />
        <meta
          property="og:title"
          content={`Blog | Member of the Black Empire`}
        />
        <meta
          property="og:description"
          content={`A blog about being a member of the Black Empire.`}
        />
      </Head>
      <div>
        <h1 className="font-bold italic text-6xl underline text-amber-400 mb-12">
          Members of the Black Empire
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
        <h3 className="text-3xl font-bold mb-4">All Blogs</h3>
        <div>
          {blogPosts.items.map((blogPost: any) => (
            <Blogs blogPosts={blogPost} key={blogPost.sys.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const blogPosts = await getAllBlogPosts();

  return {
    props: {
      blogPosts,
    },
  };
}
