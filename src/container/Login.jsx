import React from "react";
import { Link } from "react-router-dom";

import login_img from "../assets/images/login_img.png";
import logo from "../assets/logo.jpg";
const Login = () => {
  return (
    <div className="flex items-center bg-gray-100 justify-center h-screen">
      <div className="flex justify-center items-center h-[85%] w-[85%] bg-white overflow-hidden">
        <div className="w-1/2 flex flex-col items-center">
          <img src={logo} className="h-[42px] w-[123px]" alt="logo" />
          <h2 className="mt-6 text-xl font-bold ">Login</h2>
          <p className="text-gray-400 mt-1 text-center">
            Welcome back!<br></br> Please enter your details to login.
          </p>
          <div className="mt-2 w-[60%]">
            <div className="w-full flex flex-col">
              <label htmlFor="email" className="text-sm text-black mb-[0.5px]">
                Email
              </label>
              <input
                type="text"
                className="w-full text-black pl-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-100"
                name="email"
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="w-full flex flex-col">
              <label
                htmlFor="password"
                className="text-sm text-black mb-[0.5px]"
              >
                Password
              </label>
              <input
                type="text"
                className="w-full text-black pl-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-100"
                name="password"
                placeholder="Password"
                id="firstname"
              />
            </div>
            <button
              type="button"
              className="w-full py-2 mb-4 bg-purple-700 text-white text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-100"
            >
              Login
            </button>
            <div className="flex flex-col items-center">
              <p>Don't have your account yet?</p>
              <Link to="/signup" className="text-purple-800 font-light ml-2">
                Create Account
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full">
          <img
            src={login_img}
            className="w-full h-full object-cover"
            alt="signup image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
