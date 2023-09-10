'use client';
import React from 'react';
import FadeIn from '@/components/Slider/FadeIn';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { SiMongodb, SiExpress } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaNode } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'
import Services from '@/components/Services/Services';
import Link from 'next/link';
import Testimonial from '@/components/Testimonial/Testimonial';

const HomePage = () => {
  const disableTextSelection = () => {
    document.body.style.userSelect = 'none'; // Disable text selection
  };

  const enableTextSelection = () => {
    document.body.style.userSelect = 'auto'; // Enable text selection
  };

  return (
    <>
      <div
        className="relative flex flex-col items-center bg-gradient-to-r from-blue-100 via-purple-50 to-pink-50"
        style={{
          // background: `url('.jpg')`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div>
            <FadeIn delay={0.2} direction="down" padding fullWidth>
              <h1 className="mt-[30px] text-center xl:text-6xl lg:text-6xl text-3xl leading-tight xs:text-[64px] text-gray-900 font-extrabold max-w-[1050px] heroHeading" onMouseDown={disableTextSelection} onMouseUp={enableTextSelection}>
                Mastering Full Stack Development Your Path to Digital Excellence
              </h1>
            </FadeIn>
            <FadeIn delay={0.4} direction="down" padding fullWidth>
              <h5 className="text-center xl:text-5xl lg:text-4xl text-xl xs:text-xl mt-2 max-w-[800px] font-bold shadow-indigo-500 text-gray-600 hover:shadow-green-500/50">
                Learn <span className="zafronText">
                  <TypeAnimation
                    className='logo shadow-indigo-500 text-indigo-500'
                    sequence={[
                      'Full Stack Development',
                      1000,
                      'Front-End Development',
                      1000,
                      'Back-End Development',
                      1000,
                      'ReactJS Development',
                      1000,
                      'NodeJS Development',
                      1000,
                    ]}
                    repeat={Infinity}
                  />
                </span>
              </h5>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.4} direction="down" padding fullWidth>
              <button className="text-center mt-[30px] xs:text-xl text-indigo-500 max-w-[500px] ring-2 rounded-full ring-indigo-500 text-xl px-5 py-2 font-bold hover:bg-indigo-500 hover:text-white transition duration-150 ease-out hover:ease-in mb-20">
                <Link href="/contact">
                  Join Now
                </Link>
              </button>
            </FadeIn>
          </div>

        </div>
        <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" ></div>
      </div>

      {/* icons */}
      <section className="text-gray-600 body-font max-w-7xl mx-auto px-4">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center justify-between">
            <div className="p-4">
              <h2 className="title-font font-medium sm:text-6xl text-3xl text-yellow-500">
                <IoLogoJavascript className="logo cursor-pointer" />
              </h2>
            </div>
            <div className="p-4">
              <h2 className="title-font font-medium sm:text-6xl text-3xl text-blue-500">
                <FaReact className="logo cursor-pointer" />
              </h2>
            </div>
            <div className="p-4">
              <h2 className="title-font font-medium sm:text-6xl text-3xl text-gray-900">
                <TbBrandNextjs className="logo cursor-pointer" />
              </h2>
            </div>
            <div className="p-4">
              <h2 className="title-font font-medium sm:text-6xl text-3xl text-cyan-500">
                <TbBrandTailwind className="logo cursor-pointer" />
              </h2>
            </div>

            <div className="p-4">
              <h2 className="title-font font-medium sm:text-6xl text-3xl text-green-500">
                <FaNode className="logo cursor-pointer" />
              </h2>
            </div>

            <div className="p-4">
              <h2 className="title-font font-medium sm:text-6xl text-3xl text-gray-900">
                <SiExpress className="logo cursor-pointer" />
              </h2>
            </div>

            <div className="p-4">
              <h2 className="title-font font-medium sm:text-6xl text-3xl text-green-700">
                <SiMongodb className="logo cursor-pointer" />
              </h2>
            </div>
          </div>
        </div>

        <div className="text-gray-600 body-font max-w-7xl mx-auto">
          <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <div
              className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
              onMouseDown={disableTextSelection}
              onMouseUp={enableTextSelection}
            >
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Dynamic Learning with{" "}
                <p className="shadow-indigo-500 text-indigo-500 logo">
                  {" "}
                  Live Classes
                </p>
              </h1>
              <p className="mb-8 leading-relaxed text-xl text-gray-500">
                Experience education like never before with our engaging live
                classes. Join expert instructors in real-time sessions, ask
                questions, and interact with fellow learners. Stay ahead in your
                studies and gain in-depth knowledge through our immersive live
                learning experience.
              </p>
            </div>
            <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded w-full"
                alt="hero"
                src='/Screenshot.png'
                width={700}
                height={700}

              />
            </div>
          </div>
        </div>
      </section>

      <div>
        <Services />
      </div>

      <Testimonial />
    </>
  );
};

export default HomePage;
