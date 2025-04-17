import React from "react";
import { CiSearch } from "react-icons/ci";

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa";

import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";
import { Header, Box, Sidebar } from "../../components";
import { boxData, links, applicantData } from "../../data/dummy";
import school_logo from "../../assets/images/school_logo.png";

const ActiveApplication = () => {
  return (
    <div>
      {/* Inputs */}
      <div className="mt-4 flex  items-center gap-4 w-full">
        <div className="relative w-full  rounded-md flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="border border-gray-400 text-xs p-[7.5px] pl-[35px] rounded-md w-full outline-none focus:border-purple-400 bg-white"
            placeholder=" School, course"
          />
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <button
          type="button"
          className="w-full sm:w-[180px] p-[7.5px] text-sm flex items-center justify-center gap-3 bg-purple-800 text-white capitalize rounded-md font-extralight whitespace-nowrap"
        >
          Search
        </button>
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg shadow relative">
        <table className="table-auto w-full min-w-[900px] border-2 border-gray-200">
          <thead className="bg-gray-100 border-gray-200">
            <tr>
              <th className="w-1/4 p-3 text-xs font-semibold tracking-wide text-left">
                Courses
              </th>
              <th className="w-1/4 p-3 text-xs font-semibold tracking-wide text-left">
                School
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                <div>
                  <p className="text-sm">
                    Bachelor of Business Administration (BBA)
                  </p>
                  <p className="text-xs text-gray-600">
                    Bachelor; Co-op; Honours
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <img
                    src={fanshawe_logo}
                    className="h-8 w-8 inline-block mr-2"
                    alt="fanshawe_logo"
                  />
                  <div className="inline-block align-middle">
                    <p className="text-sm">Fanshawe College</p>
                    <p className="text-xs text-gray-600">Ontario, Canada</p>
                  </div>
                </div>
                <div className="inline-block align-middle float-right">
                  <button
                    className="text-purple-500 border border-purple-500 py-2 px-3 rounded-lg text-sm"
                    type="button"
                  >
                    View Progress
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                <div>
                  <p className="text-sm">
                    Bachelor of Business Administration (BBA)
                  </p>
                  <p className="text-xs text-gray-600">
                    Bachelor; Co-op; Honours
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <img
                    src={fanshawe_logo}
                    className="h-8 w-8 inline-block mr-2"
                    alt="fanshawe_logo"
                  />
                  <div className="inline-block align-middle">
                    <p className="text-sm">Fanshawe College</p>
                    <p className="text-xs text-gray-600">Ontario, Canada</p>
                  </div>
                </div>
                <div className="inline-block align-middle float-right">
                  <button
                    className="text-purple-500 border border-purple-500 py-2 px-3 rounded-lg text-sm"
                    type="button"
                  >
                    View Progress
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                <div>
                  <p className="text-sm">
                    Bachelor of Business Administration (BBA)
                  </p>
                  <p className="text-xs text-gray-600">
                    Bachelor; Co-op; Honours
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <img
                    src={fanshawe_logo}
                    className="h-8 w-8 inline-block mr-2"
                    alt="fanshawe_logo"
                  />
                  <div className="inline-block align-middle">
                    <p className="text-sm">Fanshawe College</p>
                    <p className="text-xs text-gray-600">Ontario, Canada</p>
                  </div>
                </div>
                <div className="inline-block align-middle float-right">
                  <button
                    className="text-purple-500 border border-purple-500 py-2 px-3 rounded-lg text-sm"
                    type="button"
                  >
                    View Progress
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                <div>
                  <p className="text-sm">
                    Bachelor of Business Administration (BBA)
                  </p>
                  <p className="text-xs text-gray-600">
                    Bachelor; Co-op; Honours
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <img
                    src={fanshawe_logo}
                    className="h-8 w-8 inline-block mr-2"
                    alt="fanshawe_logo"
                  />
                  <div className="inline-block align-middle">
                    <p className="text-sm">Fanshawe College</p>
                    <p className="text-xs text-gray-600">Ontario, Canada</p>
                  </div>
                </div>
                <div className="inline-block align-middle float-right">
                  <button
                    className="text-purple-500 border border-purple-500 py-2 px-3 rounded-lg text-sm"
                    type="button"
                  >
                    View Progress
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
                <div>
                  <p className="text-sm">
                    Bachelor of Business Administration (BBA)
                  </p>
                  <p className="text-xs text-gray-600">
                    Bachelor; Co-op; Honours
                  </p>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <img
                    src={fanshawe_logo}
                    className="h-8 w-8 inline-block mr-2"
                    alt="fanshawe_logo"
                  />
                  <div className="inline-block align-middle">
                    <p className="text-sm">Fanshawe College</p>
                    <p className="text-xs text-gray-600">Ontario, Canada</p>
                  </div>
                </div>
                <div className="inline-block align-middle float-right">
                  <button
                    className="text-purple-500 border border-purple-500 py-2 px-3 rounded-lg text-sm"
                    type="button"
                  >
                    View Progress
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveApplication;
