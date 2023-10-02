import React from 'react'

const Skills = () => {
    return (
        <>
            <section className="text-white-600 body-font">
                <div className="flex flex-col text-center w-full">
                    <h1 className="sm:text-5xl text-3xl font-bold title-font mb-2 text-gray-900">My Skills</h1>
                </div>
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">HTML</button>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">CSS</button>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">JavaScript</button>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">BootStrap</button>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">React JS</button>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">Express</button>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">MongoDB</button>
                        </div>

                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">Node JS</button>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">Tailwind CSS</button>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none rounded-full text-lg">Next.JS</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
