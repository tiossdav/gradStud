import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa";

import fanshawe_logo from "../assets/logo/fanshawe_logo.png";
import { Completed, ActiveApplication, SelectedCourses } from "../memberuser";
import { Header, Box, Sidebar } from "../components";
import { boxData, links, applicantData } from "../data/dummy";
import school_logo from "../assets/images/school_logo.png";

const Applications = ({ isSidebarOpen }) => {
  const navigate = useNavigate(); // For navigation

  const [selectedTab, setSelectedTab] = useState("selectedcourses"); // Default tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab); // Highlight the selected tab
  };
  return (
    <div
      className={`${isSidebarOpen ? "ml-57" : "ml-5"} flex w-full rounded-sm`}
    >
      <div className="relative max-h-screen w-full m-6 mt-10 overflow-x-auto">
        <div className="flex items-center bg-white">
          <h2 className="text-black text-xl">Applications</h2>
        </div>

        {/* Courses Button */}
        <div className="mt-4 gap-6 flex items-center w-full text-gray-600  border-t-1 border-b-1 border-gray-300 h-[48px]">
          <p
            className={`text-sm h-full flex items-center justify-center cursor-pointer ${
              selectedTab === "selectedcourses"
                ? "border-b-2 border-purple-700"
                : ""
            }`}
            onClick={() => handleTabClick("selectedcourses")}
          >
            Selected Courses
          </p>
          <p
            className={`text-sm h-full flex items-center justify-center cursor-pointer ${
              selectedTab === "activeapplication"
                ? "border-b-2 border-purple-700"
                : ""
            }`}
            onClick={() => handleTabClick("activeapplication")}
          >
            Active Applications
          </p>
          <p
            className={`text-sm h-full flex items-center justify-center cursor-pointer ${
              selectedTab === "completed" ? "border-b-2 border-purple-700" : ""
            }`}
            onClick={() => handleTabClick("completed")}
          >
            Completed
          </p>
        </div>

        {/* Render Components Based on Selected Tab */}
        <div className="mt-6">
          {selectedTab === "selectedcourses" && <SelectedCourses />}
          {selectedTab === "activeapplication" && <ActiveApplication />}
          {selectedTab === "completed" && <Completed />}
        </div>
      </div>
    </div>
  );
};

export default Applications;
