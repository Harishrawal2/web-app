import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <Carousel responsive={responsive}>
      {/* story1 */}
      <div className="container px-2">
        <div className="flex flex-wrap">
          <div className="p-2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={'/assets/Story/story1.jpg'}
                alt="blog"
                height={200}
                width={200}
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Bringing Ideas To Life Through Code{' '}
                </h1>
                <p className="leading-relaxed mb-3">
                  Witness aspiring coders evolve into proficient developers and
                  seasoned programmers into tech visionaries.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href="/"
                    className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* story2 */}
      <div className="container px-2">
        <div className="flex flex-wrap">
          <div className="p-2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={'/assets/Story/story3.jpg'}
                alt="blog"
                height={200}
                width={200}
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  A vision for streamlined efficiency{' '}
                </h1>
                <p className="leading-relaxed mb-3">
                  They meticulously analyzed the existing upload process,
                  identifying areas for optimization.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href="/"
                    className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* story3 */}
      <div className="container px-2">
        <div className="flex flex-wrap">
          <div className="p-2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={'/assets/Story/story2.jpg'}
                alt="blog"
                height={200}
                width={200}
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Short of extraordinary.{' '}
                </h1>
                <p className="leading-relaxed mb-3">
                  What once took 2 minutes to execute now took a mere 12 seconds
                  – a remarkable 10-fold increase in speed.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href="/"
                    className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
