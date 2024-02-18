import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-2 text-2xl font-medium leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="">
        <Date dateString={date} />
      </div>
      <div className='text-blue-500 mb-2 font-semibold border-b-2 border-b-darkgreen'>
          {tags && tags.map((tag: Tag, index: number) => (
              <Link key={index} href={`/categories/${tag.slug}`} passHref legacyBehavior>
                <a>
                  <span>{tag.name}</span>
                </a>
              </Link>
            ))}
          </div>
      {excerpt && <p className="mb-2 text-base">{excerpt}</p>}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
