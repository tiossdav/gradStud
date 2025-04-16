import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

import { Header, Box, Sidebar } from "../components";
import { boxData, links, applicantData } from "../data/dummy";
import school_logo from "../assets/images/school_logo.png";

const MemberUserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Automatically close sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(true);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${isSidebarOpen ? "ml-57" : "ml-5"} flex w-full rounded-sm`}
    >
      <div className="relative max-h-screen w-full m-6 overflow-x-hidden">
        <div className="flex items-center bg-white">
          <h2 className="text-black text-xl">Welcome, Ariba!</h2>
        </div>
        {/* Stat boxes */}
        <div className="mt-3 grid gap-3 grid-cols-[repeat(auto-fit,minmax(140px, 1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-start p-3 justify-center h-[59px] bg-white rounded-md border-1 border-purple-400 min-w-[140px]">
            <p className="text-gray-700 text-sm">Applications</p>
            <p className="text-black text-base font-bold">523</p>
          </div>
          <div className="flex flex-col items-start p-3 justify-center h-[59px] bg-white rounded-md border-1 border-purple-400 min-w-[140px]">
            <p className="text-gray-700 text-sm">Applications</p>
            <p className="text-black text-base font-bold">523</p>
          </div>
          <div className="flex flex-col items-start p-3 justify-center h-[59px] bg-white rounded-md border-1 border-purple-400 min-w-[140px]">
            <p className="text-gray-700 text-sm">Applications</p>
            <p className="text-black text-base font-bold">523</p>
          </div>
          <div className="flex flex-col items-start p-3 justify-center h-[59px] bg-white rounded-md border-1 border-purple-400 min-w-[140px]">
            <p className="text-gray-700 text-sm">Applications</p>
            <p className="text-black text-base font-bold">523</p>
          </div>
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
            className="text-sm text-white px-4 bg-purple-900 rounded-md"
          >
            Search
          </button>
        </div>

        <div className="mt-4">
          <h4 className="text-sm text-gray-700">Featured Courses</h4>
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

        {/* Featured Schools */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm text-gray-700">Featured Schools</h4>
            <a href="#" className="text-sm text-purple-700">
              View All Schools
            </a>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full p-4 px-0 gap-3 ">
            <div className="flex flex-col shadow bg-white py-3 rounded-lg">
              <div className="mt-1 flex gap-4 items-center px-4 ">
                <img src={school_logo} alt="school_logo" className="h-8" />
                <div className="flex flex-col ">
                  <p className="text-xs">Huron University College</p>
                  <p className="text-xs text-gray-500">Ontario, Canada</p>
                </div>
              </div>
              <hr className="text-gray-200 my-4" />
              <div className="mt-2 px-4 flex justify-between items-center gap-1 w-full">
                <p className="text-sm">203 Courses</p>
                <button
                  type="button"
                  className="text-white bg-purple-900 text-sm px-4 py-1 rounded-md"
                >
                  View Courses
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow bg-white py-3 rounded-lg">
              <div className="mt-1 flex gap-4 items-center px-4 ">
                <img src={school_logo} alt="school_logo" className="h-8" />
                <div className="flex flex-col ">
                  <p className="text-xs">Huron University College</p>
                  <p className="text-xs text-gray-500">Ontario, Canada</p>
                </div>
              </div>
              <hr className="text-gray-200 my-4" />
              <div className="mt-2 px-4 flex items-center justify-between gap-1 w-full">
                <p className="text-sm">203 Courses</p>
                <button
                  type="button"
                  className="text-white bg-purple-900 text-sm px-4 py-1 rounded-md"
                >
                  View Courses
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow bg-white py-3 rounded-lg">
              <div className="mt-1 flex gap-4 items-center px-4 ">
                <img src={school_logo} alt="school_logo" className="h-8" />
                <div className="flex flex-col ">
                  <p className="text-xs">Huron University College</p>
                  <p className="text-xs text-gray-500">Ontario, Canada</p>
                </div>
              </div>
              <hr className="text-gray-200 my-4" />
              <div className="mt-1 px-4  flex items-center justify-between gap-1 w-full">
                <p className="text-sm">203 Courses</p>
                <button
                  type="button"
                  className="text-white bg-purple-900 text-sm px-4 py-1 rounded-md"
                >
                  View Courses
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="mt-4">
          <div className="flex flex-col justify-between items-center bg-white border-1 border-gray-300 rounded-lg ">
            <div className="flex justify-between items-center px-1 w-full border-b-1 border-gray-200">
              <p className="text-sm text-gray-700 px-4 pt-3 pb-3">
                Recent Messages
              </p>
              <a href="#" className="text-sm px-4 pt-4 pb-3 text-purple-700">
                All Messages
              </a>
            </div>
            {/* <div className="flex flex-col px-1 py-[20px]">
                <h6 className="text-purple-800 font-bold">Support</h6>
                <p className="text-gray-500 text-sm text-justify">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page awhen looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content'
                  here.
                </p>
                <div className="flex justify-between items-center my-2">
                  <p className="text-gray-400 text-sm">23.03.2024 05:49AM</p>
                  <div className="flex items-center gap-4">
                    <p className="text-purple-800 text-sm whitespace-nowrap">
                      MSc. Economic/University of Niagara Falls
                    </p>
                    <FaArrowRight className="text-purple-800" />
                  </div>
                </div>
              </div> */}
            <div class="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div class="font-semibold px-4 text-purple-700">Support</div>
              <p class="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div class="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div class="text-xs text-gray-400 mt-2">23.03.2024 05:49AM</div>
                <div class="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
            <div class="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div class="font-semibold px-4 text-purple-700">Support</div>
              <p class="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div class="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div class="text-xs text-gray-400 mt-2">23.03.2024 05:49AM</div>
                <div class="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
            <div class="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div class="font-semibold px-4 text-purple-700">Support</div>
              <p class="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div class="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div class="text-xs text-gray-400 mt-2">23.03.2024 05:49AM</div>
                <div class="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
            <div class="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div class="font-semibold px-4 text-purple-700">Support</div>
              <p class="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div class="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div class="text-xs text-gray-400 mt-2">23.03.2024 05:49AM</div>
                <div class="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
            <div class="border-b-1 border-gray-200 py-4 hover:bg-gray-50">
              <div class="font-semibold px-4 text-purple-700">Support</div>
              <p class="text-gray-700 text-sm mt-1 px-4 pt-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page awhen looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content'
                here.
              </p>
              <div class="flex justify-between items-center mt-2 px-4 text-sm text-purple-700 font-medium">
                <div class="text-xs text-gray-400 mt-2">23.03.2024 05:49AM</div>
                <div class="flex items-center gap-4">
                  <span>MSc. Economics/University of Niagara Falls</span>
                  <FaArrowRight className="text-purple-800" />
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center p-4  text-sm text-gray-600 w-full">
              <button class="px-3 py-1 border w-21 border-gray-300 rounded hover:bg-gray-100 text-gray-800">
                Previous
              </button>
              <span className="text-gray-800">Page 1 of 10</span>
              <button class="px-3 py-1 border w-21 border-gray-300 rounded hover:bg-gray-100 text-gray-800">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* <div className="pl-6 pt-4 overflow-x-auto w-full">
           
          </div> */}
      </div>
    </div>
  );
};

export default MemberUserDashboard;
