import React, { useState, useEffect } from "react";

import { Header, Box, Sidebar } from "../components";
import { boxData, links, applicantData } from "../data/dummy";

const Dashboard = () => {
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
    <div className="flex min-h-screen  bg-gray-100 ">
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      <div
        className={`${
          isSidebarOpen ? "ml-57" : "ml-5"
        } flex m-5  w-full bg-gray-100 rounded-sm`}
      >
        <div className="relative max-h-screen w-full  overflow-x-hidden">
          <div className="sticky top-0 z-100 p-6 pb-1.5 pr-0">
            <Header
              title="Dashboard"
              onMenuClick={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
          </div>
          {/* Stat boxes */}
          <div className="pl-6 pt-4 overflow-x-auto w-full">
            <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(170px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {boxData.map((box, index) => (
                <Box key={index} {...box} />
              ))}
            </div>

            {/* New Applications Table */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow overflow-x-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg flex align-start font-semibold mb-4">
                  New Applications
                </h2>
                <div className="text-blue-500">
                  <button>View all</button>
                </div>
              </div>
              <div className="overflow-x-auto w-full">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                    <tr>
                      <th className="p-3">Member</th>
                      <th className="p-3">Course</th>
                      <th className="p-3">Application Fee</th>
                      <th className="p-3">Tuition Deposit</th>
                      <th className="p-3">Yearly Tuition</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicantData.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 whitespace-nowrap">{item.member}</td>
                        <td className="p-3 whitespace-nowrap">{item.course}</td>
                        <td className="p-3 whitespace-nowrap">
                          {item.applicationFee}
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          {item.tuitionDeposit}
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          {item.yearlyTuition}
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
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
      </div>
    </div>
  );
};

export default Dashboard;
