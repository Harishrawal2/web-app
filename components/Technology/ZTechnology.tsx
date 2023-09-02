import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const ZTechnology = () => {
  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-18 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="lg:text-4xl text-2xl font-medium title-font text-gray-900 uppercase bold">
              Zafron Technology
            </h1>
            <p className="lg:w-1/2 mx-auto text-md lg:text-lg leading-relaxed lg:text-justify">
              Zafron Technology is reshaping the way businesses interact with
              the digital sphere.
            </p>
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font mb-2 font-medium text-gray-900">
              <p className="lg:text-[35px] md:text-[28px] xl:text-[40px] text-[23px] lg:-mb-6">
                Welcome to <span className="zafronText">Zafron Services</span>
              </p>

              <br className="hidden lg:inline-block" />
              <p className="lg:text-[26px] md:text-[20px] text-[16px]">
                {' '}
                We Offer{' '}
                <span className="zafronText">
                  <TypeAnimation
                    sequence={[
                      'Application Development',
                      1000,
                      'Software Development',
                      1000,
                      'Web Development',
                      1000,
                      'AWS Solutions',
                      1000,
                      'Software Testing',
                      1000,
                    ]}
                    repeat={Infinity}
                  />
                </span>
              </p>
            </h1>
            <p className="mb-8 leading-relaxed text-md md:text-[12px] lg:text-[15px] xl:text-[17px]">
              We offer a spectrum of services, from development and deployment
              to cloud solutions, design, and rigorous testing. From mobile apps
              to web platforms, we transform ideas into digital realities. Rule
              the rapidly changing era of business empowerment, where innovation
              meets execution seamlessly. We are committed to excellence. Every
              product undergoes meticulous testing to ensure functionality,
              security, and performance. This ensures businesses launch
              confidently, knowing their digital assets are robust and reliable.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gray-900 transition duration-300 ease-in-out hover: border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                View More
              </button>
            </div>
          </div>
          <div className="xl:w-[55%] lg:w-[50%] md:w-[50%]">
            <Image
              alt="hero"
              className="rounded-[10px]"
              src={'/assets/Services.jpg'}
              width={700}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ZTechnology;
