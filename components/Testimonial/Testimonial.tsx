/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
const Testimonial = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="lg:text-4xl text-3xl font-bold title-font text-gray-900 uppercase bold">
              Testimonial
            </h1>
            <p className="lg:w-1/2 text-gray-500 mx-auto text-xl leading-relaxed">
              We revolutionized the way digital copies of cards were uploaded,
              transforming a time-consuming process into a blazing-fast
              accomplishment.
            </p>
          </div>
        </div>

        <div className="container px-5 mx-auto text-white">
          <div className="flex flex-wrap mb-4">
            {array.map((item, index) => {
              return (
                <div className="lg:w-1/3 lg:mb-0 mb-4 lg:p-4" key={index}>
                  <div className=" lg:p-4 h-full text-center bg-gray-400 rounded-[20px]">
                    <Image
                      alt="testimonial"
                      className="w-[120px] h-[120px] mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={item.image}
                      height={180}
                      width={180}
                    />
                    <p className="leading-relaxed lg:p-6 text-md lg:text:lg lg:text-justify">
                      <span className="text-green-800">""</span>
                      {item.text}
                      <span className="text-green-800">""</span>
                    </p>
                    <h2 className="text-gray-900 font-medium text-xl mb-10">
                      {item.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

const array = [
  {
    name: 'Holden Caulfield',
    image: '/assets/user1.jpg',
    text: "As Zafron University's software development program student, I was amazed by the quality of education I received. The instructors were not only knowledgeable but also approachable. The practical assignments were particularly valuable in sharpening my coding skills.",
  },
  {
    name: 'Alper Kamu',
    image: '/assets/user2.jpg',
    text: "I can't express how impressed I am with their customized development. Our team's productivity has skyrocketed, and we've seen a significant gain in process optimization. Improved workflow efficiency has translated into substantial sales growth.",
  },
  {
    name: 'Henry Letham',
    image: '/assets/user3.jpg',
    text: "I can't recommend Zafron University's software development courses enough! The curriculum included the latest industry trends and an interactive learning platform. The hands-on projects and real-world simulations gave me the practical skills.",
  },
];
