import React from 'react';
import { GetStaticProps } from 'next';
import { getClient, getPostsByTag, getSettings } from 'lib/sanity.client';

import type { Post, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import { Analytics } from '@vercel/analytics/react';

import PostList from 'components/PostList';
import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from './MoreStoriesHome'
import PostBody from 'components/PostBody'
import PostHeader from 'components/PostHeader'
import PostPageHead from 'components/PostPageHead'
import PostTitle from 'components/PostTitle'
import SectionSeparator from 'components/SectionSeparator'
import Header from 'components/NevbarNew'
import Footer from 'components/Footer'
import PdfDownloadButton from '../components/pdfDownload';

interface PageProps {
  industry: Post[];
  settings?: Settings;
  loading?: boolean
  preview?: boolean
}

const TagPage: React.FC<PageProps> = ({  industry, settings, loading, preview }) => {
  return (
    <>
      <Header/>
      <Layout preview={preview} loading={loading}>
        <Container>
          <div>
            {/* <h1>{tag.name} Posts</h1> */}
            <PostList posts={industry} />
          </div>
        </Container>
      </Layout>
      <Analytics />
      <Footer/>
    </>
  );
};


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

export default TagPage;
