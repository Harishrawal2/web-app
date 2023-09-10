"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const page = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col">
                    <div className=" mx-auto">
                        <div className="h-96 w-full overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src="/about.jpg" width={600} height={600} />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-[200px] h-[200px] rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <Image src='/harishrawal.jpg' alt='harishrawal' className='rounded-full' width={500} height={500} />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center mx-10">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">Harish Rawal</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">I'M a <b>(MERN)</b> <span className='text-indigo-500 font-bold'>Full Stack Developer</span>. I have 2 Years of Experience Front-End Development and Back-End Development. 1 year of Experience as a Teaching and 1 year of Experience as an Working with Organization.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left mx-10">
                                <p className="leading-relaxed text-lg mb-4">At Our Platform, we're dedicated to shaping your success through our comprehensive Full Stack and IT Development courses. We don't just teach; we empower you to excel in the real world. Our courses offer you the opportunity to work on real-world projects, equipping you with the skills needed to crack top company placements and launch your career with confidence.</p>
                                <p className="leading-relaxed text-lg mb-4">Join Our Platform today to embark on a transformative journey towards a successful career in Full Stack Development and IT. Let us be your partner in achieving your professional aspirations, from mastering real-world projects to securing placements in the industry's leading companies.</p>
                                <Link href='/contact' className="text-indigo-500 inline-flex items-center ring-1 px-3 py-2 rounded-full hover:bg-indigo-500 hover:text-white transition duration-150 ease-in-out">Apply Now
                                    <BsArrowRight className='mx-1' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
