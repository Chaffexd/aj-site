import { getAboutPage } from "@/lib/contentful";
import Head from "next/head";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextOptions } from "@/lib/richTextOpts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AboutPage = ({ aboutMe }) => {
  console.log("About me =", aboutMe.items[0]);

  const { title, content } = aboutMe?.items[0].fields;

  return (
    <section className="mb-20 max-w-5xl m-auto">
      <Head>
        <title>{`About Me | Member of the Black Empire`}</title>
        <meta
          name="description"
          content={`This page is dedicated to me, it introduces you into what my space is about, who I am, and what I want to set out from my site.`}
        />
        <meta
          property="og:title"
          content={`About | Member of the Black Empire`}
        />
        <meta
          property="og:description"
          content={`A site about being a member of the Black Empire.`}
        />
      </Head>
      <h1 className="font-bold text-5xl mb-4">{title}</h1>
      {content && documentToReactComponents(content, richTextOptions)}
    </section>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const aboutMe = await getAboutPage("/about-me");

  return {
    props: {
      aboutMe,
    },
  };
}
