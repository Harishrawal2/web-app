"use client"
import React, { useState } from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoJavascript, BiLogoAws, BiLogoReact, BiLogoTailwindCss, BiMobile, BiLogoNodejs, BiLogoGithub } from 'react-icons/bi'
import { SiExpress, SiMongodb } from 'react-icons/si'

const data = [
    {
        "id": 1,
        "title": "HTML/CSS",
        "icon": <AiFillHtml5 />
    },
    {
        "id": 2,
        "title": "JavaScript",
        "icon": <BiLogoJavascript />
    },
    {
        "id": 3, "title": "React JS",
        "icon": <BiLogoReact />
    },
    {
        "id": 4, "title": "Tailwind CSS",
        "icon": <BiLogoTailwindCss />
    },
    {
        "id": 5, "title": "React Native",
        "icon": <BiMobile />
    },
    {
        "id": 6, "title": "Node JS",
        "icon": <BiLogoNodejs />
    },
    {
        "id": 7, "title": "Express",
        "icon": <SiExpress />
    },
    {
        "id": 8, "title": "MongoDB",
        "icon": <SiMongodb />
    },
    {
        "id": 9, "title": "AWS",
        "icon": <BiLogoAws />
    },
    {
        "id": 10, "title": "Git/Github",
        "icon": <BiLogoGithub />
    }
]


const Skills = () => {
    const [skill, setSkill] = useState(data)
    return (
        <>
            <section className="bg-blue-400 text-white-600 body-font min-h-screen">
                <div className="flex flex-col py-10 text-center w-full">
                    <h1 className="sm:text-5xl text-3xl font-bold title-font mb-2 text-gray-900">My Skills</h1>
                </div>
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap text-center">
                        {
                            skill.map((items) => (
                                <>
                                    <div className="lg:w-2/6 md:w-1/2 w-1/2 xl:p-5 lg:p-5 md:p-4 p-2" key={items.id}>
                                        <div className="border border-gray-200 bg-white skillsPoint hover:transform hover:scale-105 transition-transform duration-300 ease-in-out p-6 rounded-lg">
                                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                                <p className='text-6xl rounded-full'>{items.icon}</p>
                                            </div>
                                            <h1 className='lg:text-2xl text-xl font-semibold'>{items.title}</h1>
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

export default Skills
