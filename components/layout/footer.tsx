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
                <img
                  src={'/assets/logo.png'}
                  width={'150px'}
                  alt=""
                  className="mix-blend-difference"
                />
              </Link>
              <Link
                href="/youtube"
                className="text-red-500 text-6xl text-center"
              >
                <FaYoutube className="text-center" />
              </Link>
            </div>
            {itemArray.map((item, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 w-full px-4 text-left"
              >
                <h2 className="text-4 bold text-white tracking-widest mb-2">
                  {item.title}
                </h2>
                <nav className="list-none mb-10">
                  {item.items.map((subItem, index) => (
                    <li key={index}>
                      <Link
                        href={subItem.link}
                        className="text-white hover:text-gray-300 cursor-pointer"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div>
          <div className="container mx-auto py-4 lg:px-[140px] flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              Copyright © {new Date().getFullYear()}
              <Link href="/" className="text-white ml-1 open-sans bold">
                Zafron Technology
              </Link>
            </p>

            <span className="flex gap-2 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link href="/terms" className="text-white">
                Term of Use
              </Link>
              <span>{'|'}</span>
              <Link href="/policy" className="text-white">
                Privacy policy
              </Link>
              <span>{'|'}</span>
              <Link href="/sitemap" className="text-white">
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

const itemArray = [
  {
    id: 1,
    title: 'Company',
    items: [
      {
        id: 1,
        title: 'Consulting',
        link: '/consulting',
      },
      {
        id: 2,
        title: 'Careers',
        link: '/careers',
      },
      {
        id: 3,
        title: 'About',
        link: '/about',
      },
      {
        id: 4,
        title: 'Success Stories',
        link: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'Professional Services',
    items: [
      {
        id: 1,
        title: 'Application Development',
        link: '/',
      },
      {
        id: 2,
        title: 'Software Development',
        link: '/',
      },
      {
        id: 3,
        title: 'Front-End Development',
        link: '/',
      },
      {
        id: 4,
        title: 'Back-End Development',
        link: '/',
      },
    ],
  },
  {
    id: 3,
    title: 'Zafron University',
    items: [
      {
        id: 1,
        title: 'Course Training',
        link: '/courses',
      },
      {
        id: 2,
        title: 'Certification Completion',
        link: '/certificate',
      },
      {
        id: 3,
        title: 'Paid Placement Support',
        link: '/placement',
      },
    ],
  },
];
