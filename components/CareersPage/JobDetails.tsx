import React from "react";
import JobData from "./JobsData.json";

const JobDetails = () => {
  return (
    <>
      <div className="container px-5 py-16 mx-auto -mb-20">
        <h1 className="text-3xl">Jobs Details</h1>
        {JobData.map((job) => (
          <div key={job.id}>
            <h1 className="xl:text-xl lg:text-xl text-md text-gray-900 font-bold">
              {job.jobTitle}
            </h1>
            <p>{job.jobDescription}</p>
            <p className="xl:text-[20px] lg:text-md xl:text-lg text-sm ">
              <span>Experience :</span>
              {job.jobExperience}
            </p>
            <p>
              Package: {job.jobPackge} |
              <span> Education: {job.jobEducation}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobDetails;
