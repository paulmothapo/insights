import Avatar from 'components/AuthorAvatar'
import CoverImage from './CoverBackground'
import Date from 'components/PostDate'
import Tag from 'components/Tag' 
import type { Post } from 'lib/sanity.queries'
import { ChevronRightIcon } from '@heroicons/react/outline';


export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug' | 'tags'>,
) {
  const { title, coverImage, date, author, slug, tags } = props;

  return (
    <>
      <div className="sm:mx-0 ">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>

      <div className="ml-6 md:ml-52">
        <div className="mt-2 text-base">
          <Date dateString={date} />
        </div>
        
        
        <div className="">
          {tags && tags.length > 0 && (
            <div className="">
            </div>
          )}
          {tags &&
            tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
        </div>
       
      </div>
    </>
  );
}




{/* <div className="hidden md:mb-6 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div> */}

 {/* <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div> */}