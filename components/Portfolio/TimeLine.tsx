import React from 'react'
import { LiaSchoolSolid } from 'react-icons/lia'
import { BiSolidSchool } from 'react-icons/bi'
import { IoIosSchool } from 'react-icons/io'

const TimeLine = () => {
    return (
        <>
            <section className="text-gray-900 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-gray-900">My Education</h1>
                    </div>
                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <LiaSchoolSolid className='w-20 h-20' />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">High School (10th)</h2>
                                <p className="leading-relaxed font-bold text-green-600 text-xl">School Name: <span className='text-yellow-500 text-sm uppercase font-extrabold'>Daya Nand Vidya Mandir I C Machlai, Budaun </span>.</p>
                                <p>2016-2017</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <BiSolidSchool className='w-20 h-20' />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Senior Secondary School (12th)</h2>
                                <p className="leading-relaxed font-bold text-green-600 text-xl">School Name: <span className='text-yellow-500 text-sm uppercase font-extrabold'>The Bhagwan p p i c nekpur badaun </span>.</p>
                                <p>2018-2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            3
                        </div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <IoIosSchool className='w-20 h-20' />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">B.Tech CSE</h2>
                                <p className="leading-relaxed font-bold text-green-600 text-xl">College Name: <span className='text-yellow-500 text-sm uppercase font-extrabold'>Future Institute of Engineering & Technology, Bareilly</span>.</p>
                                <p>2020-2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TimeLine
