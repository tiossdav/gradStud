import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

import { Header, Box, Sidebar } from "../components";
import { boxData, links, applicantData } from "../data/dummy";
import school_logo from "../assets/images/school_logo.png";
const Schools = ({ isSidebarOpen }) => {
  return (
    <div
      className={`${isSidebarOpen ? "ml-57" : "ml-5"} flex w-full rounded-sm`}
    >
      <div className="relative max-h-screen w-full m-6 mt-10 overflow-x-hidden">
        <div className="flex items-center bg-white">
          <h2 className="text-black text-xl">Schools & Courses</h2>
        </div>

        {/* Search Button */}
        <div className="mt-4 gap-2 flex w-full">
          <div className="relative w-full">
            <input
              type="text"
              name="search"
              id="search"
              className="border-1 border-gray-400 text-xs p-[7.5px] pl-[29px] rounded w-full outline-none focus:border-purple-400  "
              placeholder=" School, course"
            />
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <button
            type="button"
            className="text-sm text-white px-8 bg-purple-900 rounded-md"
          >
            Search
          </button>
        </div>

        {/* Inputs */}
        <div className="flex items-center flex-wrap mt-4 gap-4">
          <select
            name="location"
            className="border border-gray-300 py-2 px-3 w-44 rounded-lg text-gray-600 text-sm"
            id="location"
          >
            <option value="Location">Location</option>
          </select>
          <select
            name="tuition_fee"
            className="border border-gray-300 py-2 px-3 w-44 rounded-lg text-gray-600 text-sm"
            id="tuition_fee"
          >
            <option value="Tuition Fee">Tuition Fee</option>
          </select>
          <select
            name="program"
            className="border border-gray-300 py-2 px-3 w-44 rounded-lg text-gray-600 text-sm"
            id="program"
          >
            <option value="Program Level">Program Level</option>
          </select>
        </div>

        <div className="mt-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full p-4 px-0 gap-3">
            <div className="flex flex-col  shadow bg-white p-[20px] py-[15px] rounded-lg">
              <h6 className="text-sm ">
                Bachelor of Engineering (Automation and Robotics){" "}
              </h6>
              <div className="mt-1 flex gap-3 items-center p-2 pl-0">
                <img src={school_logo} alt="school_logo" className="h-8" />
                <div className="flex flex-col">
                  <p className="text-xs">Huron University College</p>
                  <p className="text-gray-700 mt-1 text-xs">Ontario, Canada</p>
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-1 w-full">
                <div className="flex justify-between">
                  <p className="text-sm">Degree:</p>
                  <p className="text-xs text-gray-700">Bachelor Degree</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Duration:</p>
                  <p className="text-xs text-gray-700">4 Year(s)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col   shadow h-auto bg-white p-[20px] py-[15px]  rounded-lg">
              <h6 className="text-sm ">
                Bachelor of Engineering (Automation and Robotics){" "}
              </h6>
              <div className="mt-1 flex gap-3 items-center p-2 pl-0">
                <img src={school_logo} alt="school_logo" className="h-8" />
                <div className="flex flex-col">
                  <p className="text-xs">Huron University College</p>
                  <p className="text-gray-700 mt-1 text-xs">Ontario, Canada</p>
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-1 w-full">
                <div className="flex justify-between">
                  <p className="text-sm">Degree:</p>
                  <p className="text-xs text-gray-700">Bachelor Degree</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Duration:</p>
                  <p className="text-xs text-gray-700">4 Year(s)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col   shadow h-auto bg-white p-[20px] py-[15px]  rounded-lg">
              <h6 className="text-sm ">
                Bachelor of Engineering (Automation and Robotics){" "}
              </h6>
              <div className="mt-1 flex gap-3 items-center p-2 pl-0">
                <img src={school_logo} alt="school_logo" className="h-8" />
                <div className="flex flex-col">
                  <p className="text-xs">Huron University College</p>
                  <p className="text-gray-700 mt-1 text-xs">Ontario, Canada</p>
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-1 w-full">
                <div className="flex justify-between">
                  <p className="text-sm">Degree:</p>
                  <p className="text-xs text-gray-700">Bachelor Degree</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Duration:</p>
                  <p className="text-xs text-gray-700">4 Year(s)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col   shadow h-auto bg-white p-[20px] py-[15px]  rounded-lg">
              <h6 className="text-sm ">
                Bachelor of Engineering (Automation and Robotics){" "}
              </h6>
              <div className="mt-1 flex gap-3 items-center p-2 pl-0">
                <img src={school_logo} alt="school_logo" className="h-8" />
                <div className="flex flex-col">
                  <p className="text-xs">Huron University College</p>
                  <p className="text-gray-700 mt-1 text-xs">Ontario, Canada</p>
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-1 w-full">
                <div className="flex justify-between">
                  <p className="text-sm">Degree:</p>
                  <p className="text-xs text-gray-700">Bachelor Degree</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Duration:</p>
                  <p className="text-xs text-gray-700">4 Year(s)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schools;
