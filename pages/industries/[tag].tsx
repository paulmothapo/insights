import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { getClient, getPostsByTag, getSettings, getAllPostsSlugs } from 'lib/sanity.client';
import { Post, Settings } from 'lib/sanity.queries';

interface PageProps {
  industry: Post[];
  settings?: Settings;
}

export default function TagPage(props: PageProps) {
  const { industry, settings } = props;

  return (
    <div>
      {/* Render posts */}
      {industry.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          {/* Render other post details */}
        </div>
      ))}
      {/* Also, include navigation to other tags or all posts */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const { params = {} } = ctx;
  const client = getClient();

  const [settings, { tag, industry }] = await Promise.all([
    getSettings(client),
    getPostsByTag(client, params.tag as string), 
  ]);

  return {
    props: {
      industry,
      settings,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: 'blocking',
  }
}