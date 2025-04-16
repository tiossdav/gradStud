import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md"; // Ensure this import is added

const Header = ({ title, onMenuClick, isSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen ? (
        <div className="flex items-center gap-2 ">
          {/* Show menu icon only on small screens */}
          {isSidebarOpen ? (
            <div className="flex items-center justify-center w-8 bg-white  shadow md:hidden">
              <button type="button" onClick={onMenuClick}>
                <MdOutlineCancel className=" h-10 w-6 " />
              </button>
            </div>
          ) : (
            <button onClick={onMenuClick} className="  shadow">
              <AiOutlineMenu className="" />
            </button>
          )}
          <h1 className="text-base font-bold text-gray-800 bg-white w-full flex text-left items-center pl-4 h-10 ">
            {title}
          </h1>
        </div>
      ) : (
        <div className="flex items-center gap-4 ">
          {/* Show menu icon only on small screens */}
          {!isSidebarOpen && (
            <button
              onClick={onMenuClick}
              className="md:hidden text-2xl p-2 bg-white rounded shadow"
            >
              <AiOutlineMenu className="h-6 w-6" />
            </button>
          )}
          <h1 className="text-base font-bold text-gray-800 bg-white w-full flex text-left items-center pl-4 h-10">
            {title}
          </h1>
        </div>
      )}
    </>
  );
};

export default Header;
