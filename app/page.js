"use client";

import Banner from "./Banner";
import Filter from "./Filter";
import { MdFilterListAlt } from "react-icons/md";
import { useState } from "react";
import JobList from "./Jobs/JobList";

export default function Home() {
  const [clicked, setClicked] = useState("All Jobs");
  const toggleClick = (value) => {
    setClicked(value);
  };
  return (
    <div className="pt-16 flex flex-col items-center">
      <div className="flex flex-col w-[1024px]">
        {/* banner */}
        <div className="flex w-full">
          <Banner />
        </div>
        {/* filters and button */}
        <div className="flex w-full flex-row my-2 border-b border-gray-300">
          <div className="flex">
            <div className="flex" onClick={() => toggleClick("All Jobs")}>
              <Filter
                value={"All Jobs"}
                isClicked={clicked === "All Jobs" ? true : false}
              />
            </div>
            <div className="flex" onClick={() => toggleClick("TAships")}>
              <Filter
                value={"Coding Ninjas TAships"}
                isClicked={clicked === "TAships" ? true : false}
              />
            </div>
            <div className="flex" onClick={() => toggleClick("Eligible")}>
              <Filter
                value={"Eligible"}
                isClicked={clicked === "Eligible" ? true : false}
              />
            </div>
            <div className="flex" onClick={() => toggleClick("Applied")}>
              <Filter
                value={"Applied"}
                isClicked={clicked === "Applied" ? true : false}
              />
            </div>
          </div>
        </div>
        {/* filter button */}
        <div className="flex w-full border-gray-300 border-b">
          <button className="flex flex-row items-center text-sm text-orange-500 py-1 px-3 border-2 border-orange-500 rounded-md mt-2 mb-4">
            <div className="mr-1">
              <MdFilterListAlt size={20} />
            </div>
            ADD FILTER
          </button>
        </div>
        {/* jobs list */}
        <div className="flex w-full">
          <JobList category={clicked} />
        </div>
      </div>
    </div>
  );
}
