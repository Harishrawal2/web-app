"use client";
import React, { useState } from "react";
import data from "./courseData.json";
import Image from "next/image";
import Link from "next/link";

const CourseSection = () => {
  const [course, setCourse] = useState(data);

  return (
    <div>
      <section className="text-gray-600 body-font max-w-7xl mx-auto px-4">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {course.map((itemCourse) => (
              <div className="p-4 md:w-1/3" key={itemCourse.id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Link href="/contact">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={itemCourse.img}
                      alt="blog"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font uppercase font-medium text-gray-400 mb-1">
                      {itemCourse.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {itemCourse.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {itemCourse.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        href="/contact"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseSection;
