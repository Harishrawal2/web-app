import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import JobsData from './JobsData.json';
import JobDetails from './JobDetails';
import Link from 'next/link';

type Data = {
  id: string;
  jobTitle: string;
  jobDescription: string;
  jobExperience: string;
  jobPackge: string;
  jobEducation: string;
};

const JobList = () => {
  const [selected, setSelected] = useState<Data | null>(null);

  const handleClick = (job: Data | null) => {
    setSelected(job);
  };

  return (
    <>
      <div>
        {JobsData.map((job) => (
          <section key={job.id}>
            <div className="flex justify-between">
              <h1 className="text-gray-900 font-semibold tracking-wide xl:text-3xl text-xl lg:text-3xl">
                {job.jobTitle}
              </h1>
              <Link
                href="/apply"
                className="flex items-center text-2xl font-semibold"
              >
                {/* <button onClick={() => handleClick(job)} className="flex"> */}
                Apply <FiArrowUpRight />
                {/* </button> */}
              </Link>
            </div>
            <p className="xl:text-xl lg:text-xl text-md py-3">
              {job.jobDescription}
            </p>
            <div className="flex gap-4 text-gray-600">
              <p className="xl:text-md lg:text-md xl:text-lg text-sm ">
                <span>Experience :</span>
                {job.jobExperience} |
              </p>
              <p>
                Package: {job.jobPackge} |
                <span> Education: {job.jobEducation}</span>
              </p>
            </div>
            <div className="flex gap-5 py-2 flex-wrap">
              <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in flex items-center justify-betweenF">
                <FaRegBuilding /> Bangalore, India
              </button>

              <button className="ring-2 rounded-full ring-gray-900 text-xl px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition duration-150 ease-out hover:ease-in flex items-center justify-between">
                <BiTimeFive /> Full Time
              </button>
            </div>
            <hr className="borderStyle mt-10 xl:-mb-10 lg:-mb-10 " />
          </section>
        ))}
        {selected && <JobDetails />}
      </div>
    </>
  );
};

export default JobList;
