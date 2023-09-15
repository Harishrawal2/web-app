"use client"
import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const testimonials = [
    {
        id: 1,
        name: 'Raj Anil',
        content: 'Enrolling in Revise Study plateform was one of the best decisions I have ever made.The exceptional learning environment, supportive community, and expert instructors have made my educational experience truly remarkable.I am leaving with not only a diploma but also a sense of confidence and preparedness for the future',
        role: "UI Developer",
    },
    {
        id: 2,
        name: 'Vipin Kumar',
        content: "The knowledge and skills I've gained have opened doors to new opportunities and personal growth. I can't thank the team at Revise Study Academy enough for their dedication to education and excellence",
        role: "Full Stack Developer",
    },
    {
        id: 3,
        name: 'Sunil Kumar',
        content: "It's been a journey of growth, learning, and discovery. I've gained not only knowledge and skills but also the confidence to pursue my passions. Revise Study Academy has truly changed my life for the better",
        role: "Full Stack Developer",
    },
];


const Testimonial = () => {
    const [testimonial, setTestimonial] = useState(testimonials)
    return (
        <>
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl font-bold text-gray-900 -mb-60">Our Student Feedback</h1>
            </div>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={500} interval={5000}>
                {
                    testimonial.map((item) => (
                        <div className="container px-5 py-24 mx-auto" key={item.id}>
                            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed text-lg">
                                    {item.content}
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                                <h2 className="text-gray-900 title-font tracking-wider text-2xl font-bold">{item.name}</h2>
                                <p className="text-indigo-500 font-bold text-xl">{item.role}</p>
                            </div>
                        </div>

                    ))
                }
            </Carousel>
        </>
    )
}

export default Testimonial
