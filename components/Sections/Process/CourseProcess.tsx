"use client"
import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Image from "next/image";
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { TbWorldCode } from 'react-icons/tb'
import { FaRegNewspaper } from 'react-icons/fa'
import { GiCheckMark } from 'react-icons/gi'

const CourseProcess = () => {
  return (
    <>
      <section className="text-gray-600 body-font border rounded-xl bg-gradient-to-r from-blue-50 via-purple-20 to-pink-30">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <CgWebsite className="text-xl" />
                </div>
                <div className="flex-grow pl-1">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Front-End Development
                  </h2>
                  <p className="leading-relaxed">
                    Learn HTML5, CSS3, Bootstrap, Tailwind CSS and JavaScript after Make Projects and Deploy code on Github. Learn with live coding JavaScript liebrary ReactJS and ReactJS FrameWork Next.js.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <AiOutlineCloudServer className="text-xl" />
                </div>
                <div className="flex-grow pl-1">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Back-End Development
                  </h2>
                  <p className="leading-relaxed">
                    Learn Nodejs, Express, MongoDB, REST API and Postman.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <TbWorldCode className="text-xl" />
                </div>
                <div className="flex-grow pl-1">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Real World Full Stack Projects
                  </h2>
                  <p className="leading-relaxed">
                    Practice Reactjs, Nextjs, tailwind css Real World Project.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <AiOutlineFundProjectionScreen className="text-xl" />
                </div>
                <div className="flex-grow pl-1">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Interview Preparation
                  </h2>
                  <p className="leading-relaxed">
                    Job Interview Front-end, Back-End and Full Stack Development Mock test via Experienced Developer.
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <FaRegNewspaper className="text-xl" />
                </div>
                <div className="flex-grow pl-1">
                  <h2 className="font-medium title-font text-sm text-gray-900 tracking-wider">
                    Resume Building
                  </h2>
                  <p className="leading-relaxed">
                    Resume Building and Tips and Trick. Linkedin Profile
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <GiCheckMark />
                </div>
                <div className="flex-grow pl-1">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Placement Support & Doubt Solve Support
                  </p>
                </div>
              </div>
            </div>
            <Image
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src='/hero.jpg'
              alt="step"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseProcess;
