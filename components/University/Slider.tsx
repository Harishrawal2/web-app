import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
      {/* card 1 */}
      <div>
        <div className="mb-4 p-6">
          <div className="text-center">
            <div>
              <Image
                alt="university"
                className="w-[250px] h-[250px] mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 border-2"
                src={'/assets/university/learn.jpg'}
                height={250}
                width={250}
              />
            </div>
            <h2 className="text-gray-900 text-2xl font-medium title-font tracking-wider text-md mb-4">
              Learn
            </h2>
            <p className="leading-relaxed text-justify">
              Discover a world of endless possibilities with our comprehensive
              range of software development and skills courses and Live classes.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <Link href="/courses">
              <p className="text-indigo-500">View More</p>
            </Link>
          </div>
        </div>
      </div>

      {/* card 2 */}
      <div className="mb-4 p-6">
        <div className="text-center">
          <div>
            <Image
              alt="university"
              className="w-[250px] h-[250px] mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 border-2"
              src={'/assets/university/certification.jpg'}
              height={250}
              width={250}
            />
          </div>
          <h2 className="text-gray-900 text-2xl font-medium title-font tracking-wider text-md mb-4">
            Certification
          </h2>
          <p className="leading-relaxed text-justify">
            Transparent and comprehensive course details to gain insight into
            the topics covered and the valuable skills you'll acquire upon
            completion.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <Link href="/courses">
            <p className="text-indigo-500">View More</p>
          </Link>
        </div>
      </div>
      {/* card 3 */}
      <div className="mb-4 p-6">
        <div className="text-center">
          <div>
            <Image
              alt="university"
              className="w-[250px] h-[250px] mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 border-2"
              src={'/assets/university/placement.jpg'}
              height={250}
              width={250}
            />
          </div>
          <h2 className="text-gray-900 text-2xl font-medium title-font tracking-wider text-md mb-4">
            Placement{' '}
          </h2>
          <p className="leading-relaxed text-justify">
            Seamlessly transition from learning to thriving. Your journey
            doesn't end at course completion. It begins a new chapter with your
            placement at Zafron Technology.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <Link href="/courses">
            <p className="text-indigo-500">View More</p>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
