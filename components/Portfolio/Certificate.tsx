"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const certificateData = [
    {
        id: 1,
        title: 'JavaScript Development',
        img: '/certificate/javascript.png',
    },
    {
        id: 2,
        title: 'Wordpress Development',
        img: '/certificate/wordpress.png',
    },
    {
        id: 3,
        title: 'MERN Stack Development',
        img: '/certificate/mern.png',
    },
    {
        id: 4,
        title: 'Web Development and Desining',
        img: '/certificate/WebDevelopmentIntern.png',
    },
    {
        id: 5,
        title: 'Command Internship Test',
        img: '/certificate/commonInternTest.png',
    },
    {
        id: 6,
        title: 'Command Internship Test',
        img: '/certificate/codekaze.png',
    }

]

const Certificate = () => {
    const [certificate, setCertficate] = useState(certificateData)
    return (
        <>
            <section className="min-h-screen bg-slate-600">
                <div className=" max-w-7xl mx-auto px-4">
                    <div className='py-10 text-center text-white'>
                        <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold capitalize'>My Courses and Internship Certifcate</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            certificate.map((data) => (
                                <>
                                    <div className="p-4 md:w-1/3" key={data.id}>
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                                            <Image src={data.img} alt={data.title} height={900} width={500} />
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Certificate
