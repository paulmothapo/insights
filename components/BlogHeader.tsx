import { ChevronRightIcon } from '@heroicons/react/outline';

export default function BlogHeader({
  title,
  description,

}: {
  title: string
  description?: any[]
  level: 1 | 2 
}) { {
      return (
        <>
        {/* <header className=" mt-10 flex flex-col  md:flex-row md:justify-between w-full  ">
          
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
        </header>
        */}
      </>
      )
  }
}
