import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { MdOutlineCancel } from "react-icons/md";
import { CgArrowsExchangeAltV } from "react-icons/cg";

import useravater from "../assets/images/useravater.png";
import { memberLinks } from "../data/dummy";

const MemberUserSidebar = ({ onClose }) => {
  const handleCloseSidebar = () => {
    if (window.innerWidth <= 900) {
      onClose();
    }
  };

  const activeLink =
    "flex items-center text-base font-light gap-3 pl-4 pt-1 pb-1 rounded-lg text-md text-black";
  const normalLink =
    "flex items-center text-base font-light gap-3 pl-4 pt-1 pb-1 rounded-lg text-md text-black opacity-0.71 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray";

  return (
    <div className=" w-52 h-screen border-r-[0.5px] border-gray-200 fixed top-0 left-0 bg-white flex flex-col items-center justify-center z-1000">
      <div className="w-full pl-8 mt-[-60px]">
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className="items-start  tracking-tight dark:text-white"
        >
          <img src={logo} alt="logo" className="w-[89px]" />
        </Link>
      </div>

      <div className="mt-8 flex flex-col justify-between h-[65%] pl-0 relative">
        {memberLinks.map((item) => (
          <div key={item.title}>
            {item.section === "Top" &&
              item.links.map((link) => (
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
        {memberLinks.map((item) => (
          <div key={item.title}>
            {item.section === "Bottom" &&
              item.links.map((link) => (
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
      <div className="w-[90%] absolute bottom-4 flex gap-3 border-[0.3px] border-gray-300 bg-white shadow-lg h-15 mt-6 rounded-lg items-center justify-center">
        <img src={useravater} alt="user avater" />
        <div className="flex flex-col">
          <p className="text-gray-900 text-xs">Frankie Sullivan</p>
          <p className="text-gray-700 text-xs">@frankie</p>
        </div>
        <CgArrowsExchangeAltV className="text-gray-700" />
      </div>
    </div>
  );
};

export default MemberUserSidebar;
