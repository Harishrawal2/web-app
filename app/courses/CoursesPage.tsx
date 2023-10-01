"use client";
import React from "react";
import CourseProcess from "../../components/Sections/Process/CourseProcess";
import CourseSection from "../../components/Sections/Courses/CourseSection";

export const CoursesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <CourseSection />
      <CourseProcess />
    </div>
  );
};
