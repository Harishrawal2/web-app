"use client";
import React from "react";
import CourseProcess from "../../components/Sections/Process/CourseProcess";
import CourseSection from "../../components/Sections/Courses/CourseSection";

export const CoursesPage = () => {
  return (
    <>
      <div className="bg-custom w-full xl:h-[500px] lg:h-[500px] md:h-[400px] h-[200px]"></div>
      <div className="max-w-7xl mx-auto px-4">
        <CourseSection />
        <div className="mt-5">
          <CourseProcess />

        </div>
      </div>
    </>

  );
};
