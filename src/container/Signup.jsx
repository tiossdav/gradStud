import React from "react";
import { Link } from "react-router-dom";

import signup_img from "../assets/images/signup_img.png";
import logo from "../assets/logo.jpg";
const Signup = () => {
  return (
    <div className="flex items-center bg-gray-100 justify-center h-screen">
      <div className="flex items-center justify-center h-[85%] w-[85%] bg-white overflow-auto">
        <div className="w-3/5 h-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <img src={logo} className="h-[42px] w-[123px]" alt="logo" />
            <h2 className="mt-6 text-xl font-bold ">Create Member Account</h2>
            <p className="text-gray-400 mt-1">Fill the form to get started</p>
          </div>

          <div className="block">
            <form action="">
              <div className=" mt-3 flex items-center justify-between gap-4 ">
                <div className="w-1/2 flex flex-col">
                  <label
                    htmlFor="firstname"
                    className="text-sm text-black mb-[0.5px]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full text-black pl-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-100"
                    name="firstname"
                    placeholder="First name"
                    id="firstname"
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label htmlFor="lastname" className="text-sm mb-[0.5px]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full text-black pl-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-100"
                    name="lastname"
                    placeholder="Last name"
                    id="lastname"
                  />
                </div>
              </div>
              <div className=" flex items-center justify-between gap-4 ">
                <div className="w-1/2 flex flex-col">
                  <label htmlFor="nationality" className="text-sm mb-[0.5px]">
                    Nationality
                  </label>
                  <select
                    name="nationality"
                    id="nationality"
                    placeholder="Select"
                    className="w-full text-gray-500 pl-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-100"
                  >
                    <option value="Select">Select</option>
                  </select>
                </div>
                <div className="w-1/2 flex flex-col">
                  <label htmlFor="phone" className="text-sm  mb-[0.5px]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full text-black pl-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-100"
                    name="phone"
                    placeholder="+234 123 4567"
                    id="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full pl-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-100"
                  name="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <button
                type="button"
                className="w-full py-2 mb-4 bg-purple-700 text-white text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-100"
              >
                Create Account
              </button>
            </form>
            <div className="flex flex-col items-center">
              <p>Already have an account?</p>
              <Link to="/login" className="text-purple-800 font-light ml-2">
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="w-2/5 h-full">
          <img
            src={signup_img}
            className="w-full h-full object-cover"
            alt="signup image"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
