/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
const Testimonial = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="lg:text-4xl text-3xl font-medium title-font text-gray-900 uppercase bold">
              Testimonial
            </h1>
            <p className="lg:w-1/2 mx-auto lg:text-lg text-md leading-relaxed lg:text-justify">
              Discover the voices and stories that illuminate the path we've
              paved in the world of software development. Behind each
              testimonial is a story of discovery – of conquering hurdles,
              embracing uncertainties, and turning dreams into lines of code
              that change the world.
            </p>
          </div>
        </div>

        <div className="container px-5 mx-auto text-white">
          <div className="flex flex-wrap">
            <div className="lg:w-1/3 lg:mb-0 mb-4 p-4 ">
              <div className="h-full text-center bg-gray-400 rounded-[20px]">
                <Image
                  alt="testimonial"
                  className="w-[120px] h-[120px] mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={'/assets/user1.jpg'}
                  height={120}
                  width={120}
                />
                <p className="leading-relaxed lg:p-6 text-md lg:text:lg lg:text-justify">
                  <span className="text-green-800">""</span> As Zafron
                  University's software development program student, I was
                  amazed by the quality of education I received. The instructors
                  were not only knowledgeable but also approachable. The
                  practical assignments were particularly valuable in sharpening
                  my coding skills.
                  <span className="text-green-800">""</span>
                </p>
                <h2 className="text-gray-900 font-medium text-xl lg:ml-[120px] mb-10">
                  HOLDEN CAULFIELD
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 ">
              <div className="h-full text-center bg-gray-400 rounded-[20px]">
                <Image
                  alt="testimonial"
                  className="w-[120px] h-[120px] mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={'/assets/user2.jpg'}
                  height={120}
                  width={120}
                />
                <p className="leading-relaxed lg:p-6 text-md lg:text:lg lg:text-justify">
                  <span className="text-green-800">""</span> I can't express how
                  impressed I am with their customized development. Our team's
                  productivity has skyrocketed, and we've seen a significant
                  gain in process optimization. Improved workflow efficiency has
                  translated into substantial sales growth.
                  <span className="text-green-800">""</span>
                </p>
                <h2 className="text-gray-900 font-medium text-xl lg:ml-[120px] mb-10">
                  ALPER KAMU
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center bg-gray-400 rounded-[20px]">
                <Image
                  alt="testimonial"
                  className="w-[120px] h-[120px] mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={'/assets/user3.jpg'}
                  height={120}
                  width={120}
                />
                <p className="leading-relaxed lg:p-6 text-md lg:text:lg lg:text-justify">
                  <span className="text-green-800">""</span>I can't recommend
                  Zafron University's software development courses enough! The
                  curriculum included the latest industry trends and an
                  interactive learning platform. The hands-on projects and
                  real-world simulations gave me the practical skills.
                  <span className="text-green-800">""</span>
                </p>
                <h2 className="text-gray-900 font-medium text-xl lg:ml-[120px] mb-10">
                  HENRY LETHAM
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
