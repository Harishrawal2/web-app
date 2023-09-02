/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <footer className="text-white body-font ">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-center text-center">
            <div className="lg:w-1/4 md:w w-full lg:px-12">
              <Link href="/">
                <img src={'/assets/logo.png'} width={'150px'} alt="" />
              </Link>
              <Link
                href="/youtube"
                className="text-red-500 text-6xl text-center"
              >
                <FaYoutube className="text-center" />
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-left">
              <h2 className="text-[17px] bold text-white tracking-widest mb-2">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    Success Stories
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-left">
              <h2 className="font-bold text-white tracking-widest text-[17px] mb-2">
                Professional Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    Front-End Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    Back-End Development
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-left">
              <h2 className="title-font font-bold text-white tracking-widest text-[17px] mb-2">
                Zafron University
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href="/courses"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    Course Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificate"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    Certification Completion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/placement"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    Paid Placement Support
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="container mx-auto py-4 lg:px-[140px] flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              Copyright © 2023
              <Link href="/" className="text-white ml-1 open-sans bold">
                Zafron Technology
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link href="/terms" className="text-white">
                Term of Use ||
              </Link>

              <Link href="/policy" className="ml-3 text-white">
                Privacy policy ||
              </Link>
              <Link href="/sitemap" className="ml-3 text-white">
                Site Map
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
