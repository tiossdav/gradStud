import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa";

import fanshawe_logo from "../../assets/logo/fanshawe_logo.png";
import { Header, Box, Sidebar } from "../../components";
import { boxData, links, applicantData } from "../../data/dummy";
import school_logo from "../../assets/images/school_logo.png";

const SelectedCourses = () => {
  return (
    <div>
      {/* Inputs */}
      <div className="mt-4 flex flex-wrap items-center gap-4 w-full">
        {/* Left Section */}
        <div className="relative w-full sm:w-auto">
          <select
            name="location"
            className="appearance-none border border-gray-300 py-2 px-3 outline-none w-full sm:w-[150px] rounded-lg text-gray-600 text-sm"
            id="location"
          >
            <option value="Location">Location</option>
          </select>
          <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
        <div className="relative w-full sm:w-auto">
          <select
            name="tuition_fee"
            className="appearance-none border border-gray-300 py-2 px-3 outline-none w-full sm:w-[150px] rounded-lg text-gray-600 text-sm"
            id="tuition_fee"
          >
            <option value="Tuition Fee">Tuition Fee</option>
          </select>
          <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
        <div className="relative w-full sm:w-auto">
          <select
            name="program"
            className="appearance-none border border-gray-300 py-2 px-3 outline-none w-full sm:w-[150px] rounded-lg text-gray-600 text-sm"
            id="program"
          >
            <option value="Program Level">Program Level</option>
          </select>
          <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
        </div>

        {/* Right Section */}
        <div className="relative w-full sm:w-[223px] flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="border border-gray-400 text-xs p-[7.5px] pl-[35px] rounded w-full outline-none focus:border-purple-400 bg-white"
            placeholder=" School, course"
          />
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <button
          type="button"
          className="w-full sm:w-[180px] py-1 text-sm flex items-center justify-center gap-3 bg-white text-purple-900 border border-purple-900 rounded-md font-extralight whitespace-nowrap"
        >
          <FaPlus /> Select More Courses
        </button>
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg shadow relative">
        <table className="table-auto w-full min-w-[900px]">
          <thead className="bg-gray-100 border-gray-200">
            <tr>
              <th className="w-1/4 p-3 text-xs font-semibold tracking-wide text-left">
                Course
              </th>
              <th className="w-1/4 p-3 text-xs font-semibold tracking-wide text-left">
                School
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                Duration
              </th>
              <th className="w-1/6 p-3 text-xs font-semibold tracking-wide text-left">
                Application Fee
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
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
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
              </td>
              <td className="p-3 text-sm text-gray-900">4 Year(s)</td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <div className="relative inline-block align-middle pr-2">
                    <input
                      type="checkbox"
                      className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                      name="paid"
                      id="paid"
                    />
                    <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span>N150,000</span>
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
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
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
              </td>
              <td className="p-3 text-sm text-gray-900">4 Year(s)</td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <div className="relative inline-block align-middle pr-2">
                    <input
                      type="checkbox"
                      className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                      name="paid"
                      id="paid"
                    />
                    <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span>N150,000</span>
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
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
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
              </td>
              <td className="p-3 text-sm text-gray-900">4 Year(s)</td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <div className="relative inline-block align-middle pr-2">
                    <input
                      type="checkbox"
                      className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                      name="paid"
                      id="paid"
                    />
                    <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span>N150,000</span>
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
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
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
              </td>
              <td className="p-3 text-sm text-gray-900">4 Year(s)</td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <div className="relative inline-block align-middle pr-2">
                    <input
                      type="checkbox"
                      className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                      name="paid"
                      id="paid"
                    />
                    <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span>N150,000</span>
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
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">
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
              </td>
              <td className="p-3 text-sm text-gray-900">4 Year(s)</td>
              <td className="p-3 text-sm text-gray-900">
                <div className="inline-block align-middle">
                  <div className="relative inline-block align-middle pr-2">
                    <input
                      type="checkbox"
                      className="appearance-none peer h-[14px] w-[14px] border-1 rounded-sm border-purple-500 text-purple-500"
                      name="paid"
                      id="paid"
                    />
                    <IoIosCheckmark className="text-xl text-purple-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span>N150,000</span>
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td
                colSpan="2"
                className="relative place-items-end text-sm text-gray-900"
              >
                <div className="pt-4 pb-4  place-items-end absolute right-23 sm:right-18 md:right-18 lg:right-23">
                  <div className="">
                    <p className="font-semibold text-xs inline-block pr-6">
                      Selected: 2
                    </p>
                    <p className="font-semibold text-xs inline-block">
                      Cost: N300, 000
                    </p>
                  </div>
                  <button
                    className="text-sm text-white bg-purple-800 py-2 px-2 mt-4 rounded-md"
                    type="button"
                  >
                    Proceed to payment
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

export default SelectedCourses;
