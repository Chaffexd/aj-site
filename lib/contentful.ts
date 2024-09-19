import { createClient } from "contentful";

const accessToken = process.env.CONTENTFUL_DELIVERY_API!;
const space = process.env.CONTENTFUL_SPACE_ID!;
const environment = "master";

export const client = createClient({
  accessToken,
  space,
  environment,
});

export async function getAllPodcasts() {
  const podcasts = await client.getEntries({
    content_type: "podcastPage",
  });

  return podcasts;
}

export async function getSinglePodcast(podcastId: string) {
  const podcast = await client.getEntries({
    content_type: "podcastPage",
    "fields.slug[match]": podcastId,
  });

  return podcast;
}

export async function getAllBlogPosts() {
  const blogPosts = await client.getEntries({
    content_type: "blogPost",
  });

  return blogPosts;
}

export async function getSingleBlogPost(blogPostId: string) {
  const blogPosts = await client.getEntries({
    content_type: "blogPost",
    "fields.slug[match]": blogPostId,
  });

  return blogPosts;
}

export async function getAboutPage(slug: string) {
  const aboutPage = await client.getEntries({
    content_type: "page",
    "fields.slug[match]": slug,
  });

  return aboutPage;
}
