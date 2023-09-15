"use client"
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { BiCodeBlock } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div>
          <Link href='/' className="flex title-font font-medium items-center text-gray-900">
            <BiCodeBlock className='text-3xl rounded-[14px] bg-indigo-500 shadow-lg shadow-indigo-500/100' />
            <p className="ml-3 text-2xl font-sans shadow-indigo-500/50 font-bold text-shadow-2xl text-indigo-500 logo">Revise <span className='text-gray-900 logo2'>Study</span></p>
          </Link>
        </div>
        <p className="text-lg text-gray-500 font-medium sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">Copyright
          <Link href="/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"> &#169; 2023</Link>
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start xl:text-xl lg:text-lg md:text-md font-medium gap-1">
          <Link href='https://fullstackcode.in/' target='_blank' className="xl:ml-3 lg:ml-0 ml-0 text-gray-500">
            Blogs |
          </Link>
          <Link href='/about' className="xl:ml-3 lg:ml-0 ml-0 text-gray-500">
            About Us |
          </Link>
          <Link href='/' className="xl:ml-3 lg:ml-0 ml-0 text-gray-500">
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
