import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'
import { ChevronRightIcon } from '@heroicons/react/outline'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <>
      {/* <div className="px-8">
        <h1 className=" text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6 ">
          How we are Helping Clients
        </h1>
      </div> */}
      <main className="flex flex-row w-full p-2 text-sm ">
        <div className="hover:text-mildgreen flex items-center border-r-4  px-3 md:px-16 border-r-blue-500">
          <a
            href="https://www.idealisticworld.com/industries/education/how-we-help-clients"
            className="font-bold p-2 text-ideablack hover:text-mildgreen flex justify-center"
          >
            Education
          </a>
        </div>

        <div className="hover:text-mildgreen flex items-center border-r-4  px-3 md:px-16 border-r-blue-500">
          <a
            href="https://www.idealisticworld.com/industries/energy/how-we-help-clients"
            className="font-bold p-4  text-ideablack hover:text-mildgreen flex justify-center"
          >
            Energy
          </a>
        </div>

        <div className="hover:text-mildgreen flex items-center border-r-4  px-3 md:px-16 border-r-blue-500">
          <a
            href="https://www.idealisticworld.com/industries/healthcare/how-we-help-clients"
            className="font-bold p-4  text-ideablack hover:text-mildgreen flex justify-center"
          >
            Healthcare
          </a>
        </div>

        <div className="hover:text-mildgreen flex items-center border-r-4  hidden md:inline-block px-4 md:px-16 border-r-blue-500">
          <a
            href="https://www.idealisticworld.com/industries/financial-services/how-we-help-clients"
            className="font-bold p-4  text-ideablack hover:text-mildgreen flex justify-center"
          >
            Financial Services
          </a>
        </div>

        <div className="hover:text-mildgreen flex items-center border-r-4  hidden md:inline-block px-4 md:px-16 border-r-blue-500">
          <a
            href="https://www.idealisticworld.com/industries/media-and-entertainment/how-we-help-clients"
            className="font-bold p-4  text-ideablack hover:text-mildgreen flex justify-center"
          >
            Media & Entertainment
          </a>
        </div>

        <div className="hover:text-mildgreen flex items-center justify-center   px-3 md:px-16">
          <a
            href="https://www.idealisticworld.com/industries/technology/how-we-help-clients"
            className="font-bold hover:border-b-darkgreen border-b-mildgreen p-2  text-ideablack hover:text-mildgreen flex justify-center"
          >
            Technology
          </a>
        </div>
      </main>

      <section className="bg-gray-200 text-ideablack p-8">
        <h1 className="text-xl mb-2 text-mildgreen font-medium">Read More</h1>
        <h2 className=" text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6">
          Stay Ahead
        </h2>
        <div className="mb-4 grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-2 md:gap-y-32 lg:gap-x-32">
          {posts.map((post) => (
            <PostPreview
              key={post._id}
              title={post.title}
              coverImage={post.coverImage}
              // author={post.author}
              slug={post.slug}
              tags={post.tags}
            />
          ))}
        </div>
      </section>
    </>
  )
}
