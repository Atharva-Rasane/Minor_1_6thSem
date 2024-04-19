import React from 'react';
import Image from 'next/image'; // Import next/image
import SearchForm from '../forms/SearchForm';

const FoodListing = () => {
  return (
    <div className="flex-none w-full max-w-full px-3 mt-6">
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
          <h6 className="mb-1">Avalable Food</h6>
          <p className="leading-normal text-sm">This Food might need to be picked up</p>
        </div>
        <SearchForm></SearchForm>
        <div className="flex-auto p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
              <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                <div className="relative">
                  <a className="block shadow-xl rounded-2xl">
                    {/* Use next/image instead of img tag */}
                    <Image src="/images/leftoverpizza.jpeg" alt="img-blur-shadow" width={500} height={500} className="max-w-full shadow-soft-2xl rounded-2xl" />
                  </a>
                </div>
                <div className="flex-auto px-1 pt-6">
                  <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">18 April 2024</p>
                  <a href="javascript:;">
                    <h5>Pepperoni Pizza</h5>
                  </a>
                  <p className="mb-6 leading-normal text-sm">Savor the Flavor: Dive into a slice of our leftover pepperoni pizza. A delicious blend of savory toppings, perfect for a quick, satisfying meal.</p>
                  <div className="flex items-center justify-between">
                    <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View Details</button>
                    {/* Rest of the code */}
                  </div>
                </div>
              </div>
            </div>
            {/* Additional project cards */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodListing;
