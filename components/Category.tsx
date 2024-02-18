import React from 'react';

function Category() {
  return (
    <div className="flex text-md mt-20 justify-center items-center md:text-2xl border-b border-black">
      <div className="mr-2 font-bold">
        <a href="/categories/technology" className="hover:underline hover:text-green-500">
          Tech
        </a>
      </div>
      <div className="mr-2 ">|</div>
      <div className="mr-2 font-bold">
        <a href="/categories/finance" className="hover:underline hover:text-green-500">
          Finance
        </a>
      </div>
      <div className="mr-2">|</div>
      <div className="mr-2 font-bold">
        <a href="/categories/ai" className="hover:underline hover:text-green-500">
          AI
        </a>
      </div>
      <div className="mr-2">|</div>
      <div className="mr-2 font-bold">
        <a href="/categories/business" className="hover:underline hover:text-green-500">
          Business
        </a>
      </div>
      <div className="mr-2">|</div>
      <div className='font-bold'>
        <a href="/categories/psychology" className="hover:underline hover:text-green-500">
          Psychology
        </a>
      </div>
    </div>
  );
}

export default Category;
