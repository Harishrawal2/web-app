'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { BiCodeBlock } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { MdDashboardCustomize } from 'react-icons/md'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  return (
    <>
      <nav className="bg-white text-gray-900 open-sans sticky top-0 z-40 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-white font-bold">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <BiCodeBlock className="text-4xl rounded-[14px] bg-indigo-500 shadow-lg shadow-indigo-500/100" />
                  <p className="ml-3 text-3xl font-sans shadow-indigo-500/50 font-bold text-shadow-2xl text-indigo-500 logo">Harish <span className='text-gray-900 logo2'>Rawal</span> </p>
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="space-x-5 flex items-center">
                <div
                  dir="rtl"
                  className="relative group"
                  onMouseLeave={() => setIsDropdownOpen2(false)}
                >
                  <button onMouseOver={() => setIsDropdownOpen2(true)}>
                    <li className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl open-sans flex items-center gap-1">
                      <Link href='/courses'>
                        Courses
                      </Link>
                    </li>
                  </button>

                  <div
                    className={`absolute z-10 w-[600px] bg-white py-5 border border-gray-300 divide-x divide-gray-200 rounded-md shadow-lg grid grid-cols-2 text-left ${isDropdownOpen2 ? 'block' : 'hidden'
                      }`}
                  >
                    <div>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Full Stack Web Development
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Front-End Development
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Back-End Development
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        MERN Stack Development
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Git & Github
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Advance JavaScript
                      </Link>

                      <Link
                        href="/"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        React + NextJS
                      </Link>
                      <Link
                        href="/careers"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >NodeJS
                      </Link>
                    </div>
                  </div>
                </div>

                <li className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl open-sans flex items-center">
                  <Link href='/'>
                    Projects
                  </Link>
                </li>
                <li className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl open-sans flex items-center">
                  <Link href='/portfolio'>
                    Portfolio
                  </Link>
                </li>

                <li className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl open-sans flex items-center">
                  <Link href='/contact'>
                    Contact Us
                  </Link>
                </li>

                {/* <div className="flex flex-row md:flex-row items-center justify-between gap-4">
                  <Link href="/login" className="inline-flex items-center py-2 px-3 font-semibold bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded-[25px] text-lg text-white mt-4 md:mt-0">Login <FiLogIn /></Link>
                  <button className="inline-flex items-center py-2 px-3 bg-green-500 shadow-lg shadow-green-500/50 rounded-[25px] text-white text-lg mt-4 md:mt-0">Dashboard <MdDashboardCustomize /></button>
                </div> */}

              </div>
            </div>

            {/* mobile menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-900 focus:outline-none text-2xl"
              >

                {isMobileMenuOpen ? (
                  <AiOutlineClose />
                ) : (
                  <AiOutlineMenu />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="relative group">
                <Link href='/courses'>
                  <li
                    className="text-gray-900 px-3 py-2 open-sans flex items-center gap-1 text-xl"
                  >
                    Courses
                  </li>
                </Link>
                <Link href='/'>
                  <li
                    className="text-gray-900 px-3 py-2 open-sans flex items-center gap-1 text-xl"
                  >
                    Projects
                  </li>
                </Link>

                <Link href='/portfolio'>
                  <li
                    className="text-gray-900 px-3 py-2 open-sans flex items-center gap-1 text-xl"
                  >
                    Portfolio
                  </li>
                </Link>
                <Link href='/contact'>
                  <li
                    className="text-gray-900 px-3 py-2 open-sans flex items-center gap-1 text-xl"
                  >
                    Contact
                  </li>
                </Link>
                {/* <div className="flex flex-row md:flex-row items-center justify-around">
                  <Link href="/login" className="inline-flex items-center py-2 px-3 font-semibold bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded-[25px] text-lg text-white mt-4 md:mt-0">Login <FiLogIn /></Link>
                  <button className="inline-flex items-center py-2 px-3 bg-green-500 shadow-lg shadow-green-500/50 rounded-[25px] text-white text-lg mt-4 md:mt-0">Dashboard <MdDashboardCustomize /></button>
                </div> */}
              </div>

            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
