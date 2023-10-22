// Course.tsx
import React, { useState } from "react";
import data from "./courseData.json";
import Image from "next/image";
import Link from "next/link";

const CourseSection = () => {
  const [courses, setCourses] = useState(data);
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(filter.toLowerCase())
  );

  // Get unique categories from the data
  const uniqueCategories = Array.from(
    new Set(courses.map((course) => course.category))
  );

  return (
    <>
      <div>
        <section className="text-gray-600 body-font max-w-7xl mx-auto px-4">
          {/* Filter and Search Section */}
          <div className="flex xl:py-10 lg:py-10 md:py-5 space-x-4 lg:justify-start justify-center items-center py-10">
            <div>
              <input
                type="text"
                className="border rounded lg:px-5 lg:py-2 md:px-5 md:py-2 px-1 py-1 lg:text-xl text-md"
                placeholder="Search Courses"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>

            <div>
              {/* Category filter */}
              <select
                value={selectedCategory}
                className="border rounded lg:px-5 lg:py-2 md:px-5 md:py-2 px-1 py-2 lg:text-xl text-md"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Courses Section */}
          <div className="container mx-auto">
            <div className="flex flex-wrap -m-4">
              {filteredCourses
                .filter(
                  (course) =>
                    !selectedCategory || course.category === selectedCategory
                )
                .map((course) => (
                  <div className="p-4 md:w-1/3" key={course.id}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <Link href="/contact">
                        <Image
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={course.img}
                          alt="blog"
                          width={400}
                          height={400}
                        />
                      </Link>
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font uppercase font-medium text-gray-400 mb-1">
                          {course.category}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {course.title}
                        </h1>
                        <p className="leading-relaxed mb-3">
                          {course.description}
                        </p>
                        <div className="flex items-center flex-wrap">
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
    </>
  );
};

export default CourseSection;
