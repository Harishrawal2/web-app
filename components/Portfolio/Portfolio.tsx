"use client"
import Image from 'next/image'
import picofme from '../../public/picofme.png'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import FadeIn from '../Slider/FadeIn'
import TimeLine from './TimeLine'
import Skills from './Skills'
import Projects from './Projects'
import Experience from '../Experiences/Experience'
import Certificate from './Certificate'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiLeetcode, SiBlogger } from 'react-icons/si'

const Portfolio = () => {


    return (
        <>
            <div className='bg-slate-700 text-white min-h-screen'>
                {/* <div className='bg-gradient-to-r from-blue-200/100 to-purple-100/50'> */}
                <div className='max-w-7xl mx-auto py-24 relative'>
                    <div className='xl:flex lg:flex md:flex items-center lg:justify-around md:justify-around'>
                        <div className='lg:w-1/2 xl:w-1/2 md:w-1/2 px-4'>
                            <h1 className="text-4xl font-extrabold text-yellow-500">Harish</h1>
                            <p className="lg:text-5xl text-3xl font-bold text">I'M a <span className='text-indigo-500'>
                                <TypeAnimation
                                    sequence={[
                                        'Full Stack (MERN)',
                                        1000,
                                        'Front-End',
                                        1000,
                                        'Back-End',
                                        1000,
                                        'ReactJS',
                                        1000,
                                        'NodeJS',
                                        1000,
                                    ]}
                                    repeat={Infinity}
                                />
                            </span> <br />Developer.</p>
                            <p className='mt-2 lg:text-xl xl:text-xl text-lg font-medium text-white'>I've Total 2 years of experience, 1 Year of Experience in developing web applications and 1 Year of Experience in Teaching. I'm currently working on a full stack web application using MERN stack. I'm also a freelancer.</p>
                            <div className="py-10 flex text-xl font-medium items-center gap-8">
                                <Link href="/HarishResumeExp.pdf"
                                    target='_blank' className='bg-indigo-500 text-white px-10 py-2 rounded-full hover:transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg shadow-indigo-500/50'>Resume</Link>
                                <Link href='/contact' className='bg-green-500 text-white px-10 py-2 rounded-full hover:transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg shadow-green-500/50' target='_blank'>Contact</Link>
                            </div>
                            <div className='flex flex-wrap items-center lg:justify-start md:justify-start justify-between gap-10'>
                                <Link
                                    href="https://www.linkedin.com/in/harish-rawal-b4024b211/"
                                    target="_blank"
                                    className="flex items-center justify-start rounded-full transition-transform transform hover:scale-110"
                                >
                                    <div className="text-indigo-600 p-1 rounded-lg shadow-xl shadow-indigo-500/50">
                                        <BsLinkedin className="text-4xl rounded-lg bg-white" />
                                    </div>
                                </Link>

                                <Link
                                    href="https://leetcode.com/harish8126/"
                                    target="_blank"
                                    className="flex items-center justify-start rounded-full transition-transform transform hover:scale-110"
                                >
                                    <div className="text-yellow-600 p-1 rounded-lg shadow-xl shadow-yellow-500/50">
                                        <SiLeetcode className="text-4xl rounded-lg bg-white" />
                                    </div>
                                </Link>
                                <Link
                                    href="https://github.com/Harishrawal2"
                                    target="_blank"
                                    className="flex items-center justify-start rounded-full transition-transform transform hover:scale-110"
                                >
                                    <div className="text-white p-1 rounded-lg shadow-xl shadow-purple-500/50">
                                        <BsGithub className="text-4xl rounded-lg bg-gray-900" />
                                    </div>
                                </Link>

                                <Link
                                    href="https://fullstackcode.in/"
                                    target="_blank"
                                    className="flex items-center justify-start rounded-full transition-transform transform hover:scale-110"
                                >
                                    <div className="text-yellow-600 p-1 rounded-lg shadow-xl shadow-cyan-500/50">
                                        <SiBlogger className="text-4xl rounded-lg bg-white" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <FadeIn delay={.5} direction='left'>
                            <div className='xl:ml-10 lg:ml-10 border lg:h-[350px] lg:w-[350px] md:h-[250px] md:w-[250px] rounded-full h-[300px] w-[300px] lg:py-0 md:py-0 bg-yellow-500 shadow-xl shadow-yellow-500/50 xl:mt-0 lg:mt-0 md:mt-0 mt-10'>
                                <Image src={picofme} alt='Image' className='rounded-full' layout='responsive' objectFit='cover' priority={true} quality={100} placeholder='blur' blurDataURL='/picofme.png' sizes='(max-width: 400px) 100vw, 400px' />
                            </div>
                        </FadeIn>
                    </div>
                </div >
            </div >
            {/* </div> */}
            < TimeLine />
            <Skills />
            <Projects />
            <Experience />
            <Certificate />
        </>

    )
}

export default Portfolio
