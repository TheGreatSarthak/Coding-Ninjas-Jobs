import { PiCurrencyInr } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { IoBriefcaseOutline } from "react-icons/io5";

const customColors = [
  { backgroundColor: "#FFDBEA", color: "#DC87A2" },
  { backgroundColor: "#E0F3FD", color: "#6AAFC3" },
  { backgroundColor: "#E3D1FF", color: "#A183EE" },
  { backgroundColor: "#DDE9FD", color: "#6275A5" },
  // Add more color combinations as needed
];

const JobCard = ({ job }) => {
  return (
    <div className="lg:flex lg:flex-row justify-between shadow-md w-full bg-white mb-6 mt-2 hover:transform hover:scale-105 transition-transform duration-300">
      <div className="flex">
        {/* logo */}
        <div className="rounded-full w-20 h-20 border border-gray-300 m-4">
          <img
            src={job.image_link}
            alt="company-logo"
            className="rounded-full w-20 h-20"
          />
        </div>
        {/* job details */}
        <div className="flex flex-col my-4 mx-2">
          <div className="flex flex-row items-center">
            <div className="text-gray-900 font-semibold">{job.title}</div>
            <div
              className={`text-xs text-white ${
                job.eligibility === "Eligible" ? "bg-blue-900" : "bg-red-500"
              }  rounded-sm py-1 px-2 mx-3`}
            >
              {job.eligibility}
            </div>
          </div>
          <div className="flex text-gray-500 text-xs my-1">{job.company}</div>
          <div className="flex flex-row text-sm text-gray-700 items-center">
            <div className="flex items-center mr-4">
              <div className="mr-1">
                <SlLocationPin />
              </div>
              {job.location}
            </div>
            <div className="flex items-center mr-4">
              <div className="mr-1">
                <IoBriefcaseOutline />
              </div>
              {job.employment_type}
            </div>
            <div className="flex items-center mr-4">
              <div className="mr-1">
                <PiCurrencyInr />
              </div>
              {job.salary}
            </div>
          </div>
          {/* job skills */}
          <div className="flex flex-row text-sm font-semibold">
            {job.skills.map((skill, index) => (
              <div
                className="rounded-sm mr-2 px-2 py-1 my-4"
                style={{
                  backgroundColor:
                    customColors[index % customColors.length].backgroundColor,
                  color: customColors[index % customColors.length].color,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* date and button */}
      <div className="lg:flex lg:flex-col lg:justify-between my-4 mx-4 text-gray-600 text-sm">
        <div className="max-lg:hidden">
          Application Deadline - {job.application_deadline}
        </div>
        <div className="flex lg:justify-end max-lg:w-full">
          <button className="text-orange-500 py-1 px-3 max-lg:w-full border-2 border-orange-500 rounded-md">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
