import AuthorAvatar from 'components/AuthorAvatar';
import CoverImage from 'components/CoverImageHero';
import Date from 'components/PostDate';
import type { Post, Tag } from 'lib/sanity.queries';
import Link from 'next/link';
import { useState } from 'react';

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'slug' | 'tags'
  >,
) {
  const { title, coverImage, date, excerpt, slug, tags } = props;

  

  return (
    <section className="relative">
      <div className="">
          <div className=" ">
            <CoverImage slug={slug} title={title} image={coverImage} priority />
          </div>
      </div>
      <div className="mb-16 md:mb-20 bg-lightgreen text-darkgreen md:px-32 p-6">
        <div>
          <h3 className="mb-4 text-2xl leading-tight lg:text-4xl font-medium">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
          <div className='text-mildgreen mb-4 font-semibold'>
          {tags && tags.map((tag: Tag, index: number) => (
              <Link key={index} href={`/categories/${tag.slug}`} passHref legacyBehavior>
                <a>
                  <span>{tag.name}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
}