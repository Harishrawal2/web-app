"use client"
import React, { useState } from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import data from './Skills.json'

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
                                    <div className="lg:w-2/6 md:w-1/2 p-10" key={items.id}>
                                        <div className="border border-gray-200 bg-white transition p-4 rounded-lg">
                                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                                <AiFillHtml5 />
                                            </div>
                                            <h1 className='text-xl font-semibold'>{items.title}</h1>
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
