'use client';

import React from 'react';


import ZafronUniversity from '@/components/University/ZafronUniversity';
import FadeIn from '@/components/Slider/FadeIn';

const HomePage = () => {

  return (
    <>
      <div
        className="h-screen relative flex flex-col items-center"
        style={{
          background: `url('/assets/Zafronunivrsity.jpg')`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <FadeIn delay={0.2} direction="down" padding fullWidth>
              <h1 className="mt-[30px] text-center text-6xl leading-tight xs:text-[64px] text-gray-900 font-bold max-w-[1050px]">
                 Zafron University
              </h1>
            </FadeIn>
            <FadeIn delay={0.4} direction="down" padding fullWidth>
              <h5 className="text-center text-4xl xs:text-xl font-medium text-gray-900 max-w-[500px]">
                Learn. Certified. Placement
              </h5>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.4} direction="down" padding fullWidth>
              <button className="text-center mt-[70px] xs:text-xl text-indigo-700 max-w-[500px] ring-2 rounded-full ring-indigo-600 text-xl px-5 py-2 font-bold hover:bg-indigo-600 hover:text-white transition duration-150 ease-out hover:ease-in">
                View more...
              </button>
            </FadeIn>
          </div>
        </div>

        <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
      </div>


      <div>
        <ZafronUniversity />
      </div>
    </>
  );
};

export default HomePage;
