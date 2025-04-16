import React from "react";
import { BsFilter } from "react-icons/bs";

import { Header, Box } from "../components";
import { boxData, links, applicantionData } from "../data/dummy";

const Application = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="relative max-h-screen w-full  overflow-x-hidden">
      <div className="sticky top-0 z-100 p-6 pb-1.5 pr-0">
        <Header
          title="Applications"
          onMenuClick={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      {/* Stat boxes */}
      <div className="pl-6 pt-4 overflow-y-auto ">
        {/* New Applications Table */}
        <div className="bg-white p-6 mt-6 rounded-lg shadow overflow-x-auto">
          <div className="flex gap-4 items-center mb-4 text-gray-500">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className=" text-sm pl-4 text-gray-700 bg-white shadow rounded-lg p-3 border-[0.5px] border-gray- w-full max-w-[350px] sm:w-[75%] md:w-[50%] focus:bg-white focus:outline-none focus:ring-2"
            />
            <button
              type="button"
              className="flex items-center text-sm border-1 rounded-md p-2 gap-1.5 "
            >
              <BsFilter /> Filter
            </button>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 text-xs capitalize text-gray-500">
                <tr>
                  <th className="p-3  whitespace-nowrap">Member</th>
                  <th className="p-3  whitespace-nowrap">Course</th>
                  <th className="p-3 whitespace-nowrap">School</th>
                  <th className="p-3 whitespace-nowrap">Appl. Fee (paid)</th>
                  <th className="p-3 whitespace-nowrap">Tuition Deposit</th>
                  <th className="p-3 whitespace-nowrap">Yearly Tuition</th>
                  <th className="p-3 whitespace-nowrap">Status</th>
                  <th className="p-3 whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {applicantionData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-3 text-sx whitespace-nowrap">
                      {item.member}
                    </td>
                    <td className="p-3 text-sx whitespace-nowrap">
                      {item.course}
                    </td>
                    <td className="p-3 text-sx whitespace-nowrap">
                      {item.school}
                    </td>
                    <td className="p-3 text-sx whitespace-nowrap">
                      {item.applicationFee}
                    </td>
                    <td className="p-3 text-sx whitespace-nowrap">
                      {item.tuitionDeposit}
                    </td>
                    <td className="p-3 text-sx whitespace-nowrap">
                      {item.yearlyTuition}
                    </td>
                    <td className="p-3 text-sx whitespace-nowrap">
                      <span
                        className={`px-2 py-1 ${item.color} rounded text-xs`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex justify-center items-center">
                        <button
                          type="button"
                          className="bg-purple-600 p-1 pl-3 pr-3 text-xs text-white font-bold cursor-pointer"
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
