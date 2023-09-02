import React from "react";
import StoriesSlider from "./StoriesSlider";

const ZafronUniversity = () => {
  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="lg:text-4xl text-3xl font-medium title-font text-gray-900 uppercase bold">
              Success Stories
            </h1>
            <p className="lg:w-1/2 mx-auto lg:text-lg text:md leading-relaxed lg:text-justify">
              We revolutionized the way digital copies of cards were uploaded,
              transforming a time-consuming process into a blazing-fast
              accomplishment.
            </p>
          </div>
        </div>
      </div>

      <StoriesSlider />
    </>
  );
};

export default ZafronUniversity;
