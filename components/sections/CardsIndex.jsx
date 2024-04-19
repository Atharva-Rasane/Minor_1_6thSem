import React from 'react';
import Image from 'next/image';

const CardsIndex = () => {
  return (
    <div className="w-full px-6 py-6 mx-auto">
      {/* cards row 2 */}
      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap -mx-3">
                <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
                  <div className="flex flex-col h-full">
                    <p className="pt-2 mb-1 font-semibold">Nourish Lives</p>
                    <h5 className="font-bold text-lime-600">Become A Food Donor</h5>
                    <p className="mb-12">Join us in making a difference. Become a food donor today and help feed those in need. Your support matters.</p>
                    <a className="mt-auto mb-0 text-sm font-semibold leading-normal group text-slate-500" href="javascript:;">
                      Read More
                      <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                    </a>
                  </div>
                </div>
                <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
                  <div className="h-full bg-gradient-to-tl from-green-700 to-lime-500 rounded-xl">
                    <div className="relative flex items-center justify-center h-full">
                      <Image src="/images/thali.png" className="relative z-20 w-full pt-6" alt="rocket" width={500} height={500} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
          <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
            <div className="relative h-full overflow-hidden bg-cover rounded-xl">
              <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-green-700 to-lime-500"></span>
              <div className="relative z-10 flex flex-col flex-auto h-full p-4">
                <h5 className="pt-2 mb-6 font-bold text-white">Empower Change</h5>
                <p className="text-white">Contribute financially to support our mission. Your generosity fuels our efforts in providing food for those in need.</p>
                <a className="mt-auto mb-0 text-sm font-semibold leading-normal text-white group" href="javascript:;">
                  Read More
                  <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsIndex;
