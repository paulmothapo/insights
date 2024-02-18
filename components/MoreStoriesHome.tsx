import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'
import { ChevronRightIcon } from '@heroicons/react/outline';


export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <>
    <section className='bg-ideablack text-white p-8'>
      <h1 className='text-xl mb-2 text-mildgreen font-medium'>Read More</h1>
      <h2 className=" text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-2">
        Stay Ahead
      </h2>
      <p className='mb-10 text-lg'>Read more Idealistic insights.</p>
      <div className="mb-20 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
    <main className=" flex flex-col  md:flex-row md:justify-between w-full  ">
          
    <div className="md:mt-0 mt-8 md:mx-6 hover:text-ideablack flex items-center hidden md:inline-block">
  <a href='/about/our-purpose-mission-values' className="font-bold hover:border-b-4 hover:border-b-darkgreen border-b-4 border-b-lightgreen p-4 md:mt-6 text-ideablack hover:text-ideablack flex justify-center ">
  Education
  <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block ml-2" />
  </a>
</div>

<div className="md:mt-0 mt-8 md:mx-6 hover:text-ideablack flex items-center hidden md:inline-block">
    <a href='/insights' className="font-bold  hover:border-b-4 hover:border-b-darkgreen border-b-4 border-b-mildgreen p-4 md:mt-6 text-ideablack hover:text-ideablack flex justify-center ">
      Energy <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block  ml-2" />
    </a>
  </div>
  <div className="md:mt-0 mt-8 md:mx-6 hover:text-ideablack flex items-center hidden md:inline-block">
    <a href='/industries' className="font-bold hover:border-b-4 hover:border-b-darkgreen border-b-4 border-b-lightgreen p-4 md:mt-6 text-ideablack hover:text-ideablack flex justify-center ">
      Healthcare <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block  ml-2" />
    </a>
  </div>
  <div className=" md:mt-0 mt-8 md:mx-6 hover:text-ideablack flex items-center hidden md:inline-block">
    <a href='/services' className="font-bold  hover:border-b-4 hover:border-b-darkgreen border-b-4 border-b-mildgreen p-4 md:mt-6 text-ideablack hover:text-ideablack flex justify-center ">
      Financial Services <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block  ml-2" />
    </a>
</div>
<div className=" md:mt-0 mt-8 md:mx-6 hover:text-ideablack flex items-center hidden md:inline-block">
    <a href='/services' className="font-bold  hover:border-b-4 hover:border-b-darkgreen border-b-4 border-b-lightgreen p-4 md:mt-6 text-ideablack hover:text-ideablack flex justify-center ">
       Media & Entertainment <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block  ml-2" />
    </a>
</div>
<div className=" md:mt-0 mt-8 md:mx-6 hover:text-ideablack flex items-center hidden md:inline-block">
    <a href='/services' className="font-bold  hover:border-b-4 hover:border-b-darkgreen border-b-4 border-b-mildgreen p-4 md:mt-6 text-ideablack hover:text-ideablack flex justify-center ">
       Technology <ChevronRightIcon className="h-6 w-6 text-mildgreen hidden md:inline-block  ml-2" />
    </a>
</div>
  </main>
  </>
  )
}
