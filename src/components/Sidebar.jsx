import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { MdOutlineCancel } from "react-icons/md";

import { links } from "../data/dummy";

const Sidebar = ({ onClose }) => {
  const handleCloseSidebar = () => {
    if (window.innerWidth <= 900) {
      onClose();
    }
  };

  const activeLink =
    "flex items-center text-base gap-5 pl-4 pt-1 pb-1 rounded-lg text-md text-gray-900";
  const normalLink =
    "flex items-center text-base gap-5 pl-4 pt-1 pb-1 rounded-lg s text-md text-gray-700 opacity-0.71 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className=" w-52 h-screen fixed top-0 left-0 bg-white flex flex-col items-center justify-center z-1000">
      <div className="flex justify-center items-center ">
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className="items-center justify-center tracking-tight dark:text-white"
        >
          <img src={logo} alt="logo" className="w-[149px]" />
        </Link>
      </div>

      <div className="mt-4 flex flex-col items-left pl-0">
        {links.map((item) => (
          <div key={item.title}>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSidebar}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {link.icon}
                <span className="capitalize text-black-300">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
