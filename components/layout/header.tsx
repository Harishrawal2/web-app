import React, { useState } from 'react';
// import logo from '../../assets/logo.png';
import { FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 open-sans sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-white font-bold">
                <Link href="/">
                  <img src={'/assets/logo.png'} width={'150px'} alt="" />
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="space-x-8 flex items-center">
                <div
                  className="relative group"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  dir="rtl"
                >
                  <button onMouseOver={() => setIsDropdownOpen(true)}>
                    <li className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl open-sans flex items-center gap-1">
                      Services
                    </li>
                  </button>

                  <div
                    className={`absolute xl:w-[1100px] md:w-96 xl:py-10 bg-white border border-gray-300 divide-x divide-gray-200 rounded-md shadow-lg grid xl:grid-cols-3 text-left ${
                      isDropdownOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <div>
                      <Link
                        href="/app/services"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Application Development & Support
                      </Link>
                      <Link
                        href="/cloud-services"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Cloud Services
                      </Link>
                    </div>

                    <div>
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Professional / Staffing
                      </Link>
                      <Link
                        href="/infrastructure"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Infrastructure Setup
                      </Link>
                    </div>

                    <div>
                      <Link
                        href="/consulting"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Consulting
                      </Link>

                      <Link
                        href="/domain-expert"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Domain Expertise
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  dir="rtl"
                  className="relative group"
                  onMouseLeave={() => setIsDropdownOpen2(false)}
                >
                  <button onMouseOver={() => setIsDropdownOpen2(true)}>
                    <li className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl open-sans flex items-center gap-1">
                      Insight
                    </li>
                  </button>

                  <div
                    className={`absolute z-10 w-96 bg-white py-10 border border-gray-300 divide-x divide-gray-200 rounded-md shadow-lg grid grid-cols-2 text-left ${
                      isDropdownOpen2 ? 'block' : 'hidden'
                    }`}
                  >
                    <div>
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/stories"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Success Stories
                      </Link>
                      <Link
                        href="/industry"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Industries
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/university"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        University{' '}
                      </Link>
                      <Link
                        href="/contact"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Contact Us
                      </Link>

                      <Link
                        href="/careers"
                        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                      >
                        Careers{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 inline-flex items-center justify-center text-gray-400 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="relative group ">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <li className="text-white px-3 py-2 rounded-md text-lg open-sans flex items-center gap-1">
                    Services <FaAngleDown />
                  </li>
                </button>

                <div
                  className={`absolute z-10 mt-2 w-80 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg  ${
                    isDropdownOpen ? 'block' : 'hidden'
                  }`}
                >
                  <div className="py-1">
                    <Link
                      href="/app/services"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Application Development & Support
                    </Link>

                    <Link
                      href="/cloud-services"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Cloud Services
                    </Link>
                    <Link
                      href="/infrastructure"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Infrastructure Setup
                    </Link>
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Professional / Staffing
                    </Link>
                    <Link
                      href="/consulting"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Consulting
                    </Link>

                    <Link
                      href="/domian-expert"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Domain Expertise
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}>
                  <li
                    // href="/insights"
                    className="text-white px-3 py-2 text-lg open-sans flex items-center gap-1"
                  >
                    Insight <FaAngleDown />
                  </li>
                </button>

                <div
                  className={`absolute z-10 mt-2 w-80 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg ${
                    isDropdownOpen2 ? 'block' : 'hidden'
                  }`}
                >
                  <div className="py-1">
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/stories"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Success Stories
                    </Link>
                    <Link
                      href="/industry"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Industries
                    </Link>
                    <Link
                      href="/university"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      University{' '}
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Contact Us
                    </Link>

                    <Link
                      href="/careers"
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    >
                      Careers{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
