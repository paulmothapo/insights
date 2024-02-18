import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import { getClient } from 'lib/sanity.client';

import Layout from 'components/Layout';
import PostList from 'components/PostList';

const CategoryPage = ({ data }) => {

  const router = useRouter();

  if (!data || !data.tag || !data.posts) {
    return <div className='font-black text-6xl animate-pulse text-center'>Loading...</div>;
  }

  if (!data.tag) {
    return <div className='text-red-500'>tag not found</div>;
  }

  return (
    <>
      <Layout>
        <h1>{data.tag.title}</h1>
        <PostList posts={data.posts} />
      </Layout>
    </>
  );
};


const categoryQuery = groq`
  *[_type == "category" && slug.current == $categorySlug][0] {
    _id,
    title
  }
`;

const postsQuery = groq`
  *[_type == "post" && references($category) && defined(slug.current)] | order(date desc, _updatedAt desc) {
    title,
    date,
    excerpt,
    coverImage,
    "slug": slug.current,
    "author": author->{name, picture},
    "tags": tags[]-> {name, "slug": slug.current},
  }
`;

export async function getServerSideProps(context) {
  try {
    const categorySlug = context.params.categorySlug;

    const category = await getClient().fetch(categoryQuery, { categorySlug });

    if (!category) {
      return {
        notFound: true,
      };
    }

    const posts = await getClient().fetch(postsQuery, { category: category._id });

    return {
      props: { data: { category, posts } },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}



export default CategoryPage;
