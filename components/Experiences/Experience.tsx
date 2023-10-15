import Image from 'next/image'
import React, { useState } from 'react'

const ExpData = [
    {
        id: 1, position: "Frontend Developer Internship", company: 'KodeTribe', companyDsc: 'KodeTribe is a leading software development services company.',
        Responsibility: "Developed and maintained a responsive e-commerce website using React.", project: 'E-commerce', projectDescription: 'Using Html/CSS, Bootstrap, React.js Technology',
        date: '11/2021 - 02/2022',
        location: 'Mohali, Punjab'

    },
    {
        id: 2, position: "Full Stack Mentor (Part Time)", company: '10x Academy (BDFL Technologies Pvt. Ltd.)', companyDsc: '10x Academy is guiding young people build real-world products and Provide Software development Courses.',
        Responsibility: "Guided and mentored students in the Full Stack development program, offering support and insights into various technical concepts and challenges.",
        project: 'Students Doubt', projectDescription: 'JavaScript and Full Stack (MERN)',
        date: '08/2022 - 02/2023',
        location: 'Remote'

    },
    {
        id: 3, position: "Full stack developer web applications", company: 'Zafron Technology', companyDsc: 'University and Software Services Based Company.',
        Responsibility: "Collaborated with cross-functional teams to design, develop, and deploy web applications and systems.Utilized a full stack of technologies, including front-end and back-end frameworks, databases, and server management. Working Skills Technology Nodejs, Express, MongoDB, React.js and Next.js",
        project: 'Mobile app, Zafron Website', projectDescription: 'JavaScript and Node, Express and MongoDB Creating Backend Some APIs and Front-End using Nextjs and React.js and some design of using Figma.',
        date: '08/2023 - 10/2023',
        location: 'Remote'

    }
]

const Experience = () => {
    const [experience, setExperience] = useState(ExpData)
    return (
        <>
            <section className="text-gray-600">
                <div className="flex flex-col py-10 text-center w-full">
                    <h1 className="sm:text-5xl text-3xl font-bold title-font mb-2 text-gray-900">My Experience Journey</h1>
                </div>
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <Image alt="feature" className="object-cover object-center h-full w-full" src="/newpic.jpg" width={500} height={500} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        {
                            experience.map((exp) => (
                                <>
                                    <div className="flex relative pt-5 pb-10 sm:items-center mx-auto">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">{exp.id}</div>
                                        <div className="flex-grow md:pl-4 pl-4 flex sm:items-center items-start flex-col sm:flex-row">
                                            <div className="flex-grow sm:mt-0">
                                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Job Type: <span className='font-bold text-indigo-600'>{exp.position}</span></h2>
                                                <p className="leading-relaxed font-bold text-green-600 text-xl">Comapny Name: <span className='text-yellow-500 text-sm uppercase font-extrabold'>{exp.company} </span>.</p>
                                                <p className='text-gray-900 font-bold'>Company Description: <span className=' font-medium'>{exp.companyDsc}</span></p>
                                                <p className='font-bold py-1'>My Responsibiliy: <span className='font-medium py-1'>{exp.Responsibility}</span></p>
                                                <table className="table-auto border-collapse w-full py-2">
                                                    <thead>
                                                        <tr>
                                                            <th className="border p-2">Project Name</th>
                                                            <th className="border p-2">Description</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="border p-2">{exp.project}</td>
                                                            <td className="border p-2">{exp.projectDescription}</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                                <div className='flex justify-between items-center'>
                                                    <p className='font-bold'>🗓️: <span>{exp.date}</span></p>
                                                    <h1 className='font-bold'>Location: <span className='font-extrabold text-yellow-500'>{exp.location}</span></h1>
                                                </div>
                                            </div>
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

export default Experience
