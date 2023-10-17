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

const Portfolio = () => {


    return (
        <>
            <div className='bg-gray-700 text-white min-h-screen'>
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
                                    target='_blank' className='bg-indigo-500 hover:bg-indigo-400 text-white px-10 py-2 rounded-full hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>Resume</Link>
                                <Link href='/contact' className='bg-green-500 hover:bg-green-400 text-white px-10 py-2 rounded-full hover:transform hover:scale-105 transition-transform duration-300 ease-in-out' target='_blank'>Contact</Link>
                            </div>
                        </div>
                        <FadeIn delay={.5} direction='left'>
                            <div className='xl:ml-10 lg:ml-10 border lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-full h-[300px] w-[300px] lg:py-0 md:py-0'>
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
