"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '../Slider/FadeIn'
import CourseSection from '../Sections/Courses/CourseSection'

const Services = () => {
    const disableTextSelection = () => {
        document.body.style.userSelect = 'none'; // Disable text selection
    };

    const enableTextSelection = () => {
        document.body.style.userSelect = 'auto'; // Enable text selection
    };
    return (
        <>
            <section className="text-gray-600 body-font max-w-7xl mx-auto px-4">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <FadeIn delay={1} direction="right" fullWidth>
                        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">

                            <Image className="object-cover object-center rounded" alt="hero" src='/services1.jpg' width={700} height={700} />
                        </div>
                    </FadeIn>
                    <FadeIn delay={1} direction="left" fullWidth>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Real-World Live Project
                                <br className="hidden lg:inline-block" /><span className='shadow-indigo-500 text-indigo-500 logo'>Experience</span>
                            </h1>
                            <p className="mb-8 leading-relaxed text-xl text-gray-500" onMouseDown={disableTextSelection} onMouseUp={enableTextSelection}>Bridge the gap between theory and practice with our Real-World Live Project program. As part of our hands-on training, you'll work on industry-relevant projects that simulate real-world scenarios. Gain practical experience, problem-solving skills, and the confidence to excel in your IT career.</p>
                            <div className="flex items-center justify-between">
                                <Link href='/' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded lg:text-xl text-md">Read more...</Link>
                                <Link href='/courses' className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded lg:text-xl lg:text-md">Explore Course</Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <div>
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center" onMouseDown={disableTextSelection} onMouseUp={enableTextSelection}>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Our Premium Course Content</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-xl">Unlock the world of Full Stack Development with our premium IT courses, featuring top-notch quality content. Whether you're a novice or an experienced programmer, our courses are designed to take your skills to the next level and empower you with the knowledge needed to become a proficient Full Stack Developer.</p>
                </div>
                <CourseSection />
            </div>
        </>
    )
}

export default Services
