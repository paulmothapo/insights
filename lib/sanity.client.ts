import { groq } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  tagsQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "tags": tags[]-> {name, "slug": slug.current},
`;

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string,
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug })
}

// export async function getPostsByTag(
//   client: SanityClient,
//   slug: string,
// ): Promise<{ post: Post; industry: Post[] }> {
//   return await client.fetch(tagsQuery, { slug })
// }

export async function getPostsByTag(
  client: SanityClient,
  slug: string,
): Promise<{ tag: Post; industry: Post[] }> {
  const tag = await client.fetch(tagsQuery, { slug });
  const industry = await client.fetch(
    `
      *[_type == "post" && references(*[_type == "tag" && slug.current == $slug]._id)] | order(date desc, _updatedAt desc) {
        ${postFields}
      }
    `,
    { slug }
  );

  return { tag, industry };
}

