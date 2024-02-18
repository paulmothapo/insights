import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'
import { ChevronRightIcon } from '@heroicons/react/outline';


export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <>
    <main className="flex flex-col md:flex-row md:justify-between w-full">
      <div className="hover:text-ideablack flex items-center hidden md:inline-block">
        <a href='/about/our-purpose-mission-values' className="font-bold p-4  text-ideablack hover:text-mildgreen flex justify-center">
          Education <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block ml-2" />
        </a>
      </div>

      <div className="hover:text-mildgreen flex items-center hidden md:inline-block">
        <a href='/insights' className="font-bold p-4  text-ideablack hover:text-mildgreen flex justify-center">
          Energy <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block ml-2" />
        </a>
      </div>

      <div className="hover:text-mildgreen flex items-center hidden md:inline-block">
        <a href='/industries' className="font-bold p-4  text-ideablack hover:text-mildgreen flex justify-center">
          Healthcare <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block ml-2" />
        </a>
      </div>

      <div className="hover:text-mildgreen flex items-center hidden md:inline-block">
        <a href='/services' className="font-bold p-4  text-ideablack hover:text-mildgreen flex justify-center">
          Financial Services <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block ml-2" />
        </a>
      </div>

      <div className="hover:text-mildgreen flex items-center hidden md:inline-block">
        <a href='/services' className="font-bold p-4  text-ideablack hover:text-mildgreen flex justify-center">
          Media & Entertainment <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block ml-2" />
        </a>
      </div>

      <div className="hover:text-mildgreen flex items-center hidden md:inline-block">
        <a href='/services' className="font-bold hover:border-b-darkgreen border-b-mildgreen p-4  text-ideablack hover:text-mildgreen flex justify-center">
          Technology <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block ml-2" />
        </a>
      </div>
    </main>

    <section className='bg-gray-200 text-ideablack p-8'>
      <h1 className='text-xl mb-2 text-mildgreen font-medium'>Read More</h1>
      <h2 className=" text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6">
        Stay Ahead
      </h2>
      <div className="mb-4 grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-2 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            author={post.author}
            slug={post.slug}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  </>
  )
}
