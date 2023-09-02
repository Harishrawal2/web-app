/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import JobList from './JobList';
import Link from 'next/link';
import Image from 'next/image';

const Careers = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="w-full">
          <Image
            src={'/assets/hiring.jpg'}
            alt="Hiring"
            width={1920}
            height={1080}
          />
        </div>
        <div className="open-sans max-w-7xl mx-auto px-4">
          <header className="bg-white py-16">
            <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in">
              We're hiring
            </button>

            <div className="mt-3">
              <h1 className="text-gray-900 font-semibold tracking-wide xl:text-6xl text-2xl lg:text-5xl">
                Be part of our mission
              </h1>
              <p className="py-4 xl:text-2xl xl:w-2/3 lg:text-2xl lg:w-5/6">
                We're looking for passionate people to join us on our mission.
                We value flat hierarchies, clear communication, and full
                ownership and responsibility.{' '}
              </p>

              <div className="py-5 flex gap-4 flex-wrap">
                <button className="ring-2  rounded-full ring-gray-900 text-xl px-5 py-2 font-medium bg-gray-900 text-white transition duration-150 ease-out hover:ease-in">
                  View all
                </button>

                <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in">
                  Development
                </button>

                <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in">
                  Design
                </button>

                <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in">
                  Marketing
                </button>

                <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in">
                  Customer Service
                </button>

                <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in">
                  Operations
                </button>

                <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in">
                  Finance
                </button>

                <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in">
                  Management
                </button>

                <Link
                  href="/notListed"
                  className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in"
                >
                  Not Listed
                </Link>
              </div>
            </div>
            <hr className="borderStyle mt-10 -mb-10" />
          </header>

          <JobList />
          <div className="mt-20"></div>
        </div>
      </div>
    </>
  );
};

export default Careers;
