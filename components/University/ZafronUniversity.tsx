import React from 'react';
import Slider from './Slider';
import ZTechnology from '../Technology/ZTechnology';
import Stories from '../Stories/Stories';
import Testimonial from '../Testimonial/Testimonial';

const ZafronUniversity = () => {
  return (
    <>
      <div className="text-gray-600 open-sans">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="lg:text-4xl text-2xl font-medium title-font text-gray-900 uppercase bold">
              Zafron University
            </h1>
            <p className="lg:w-1/2 mx-auto lg:text-lg text-md leading-relaxed lg:text-justify">
              Amidst this paradigm shift, Zafron University imparts cutting-edge
              knowledge and revolutionises how students approach their careers.
              Zafran University offers 100% placement Guaranteed.
            </p>
          </div>
        </div>
      </div>
      <Slider />
      <ZTechnology />
      <Stories />
      <Testimonial />
    </>
  );
};

export default ZafronUniversity;
