import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

import { Header, Box, Sidebar } from "../components";
import { boxData, links, applicantData } from "../data/dummy";
import MemberUserSidebar from "../components/MemberUserSidebar";
import MemberUserDashboard from "../memberuser/MemberUserDashboard";
import Schools from "../memberuser/Schools";
import school_logo from "../assets/images/school_logo.png";
import Applications from "./Applications";

const MemberHome = () => {
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
    <div className="flex min-h-screen overflow-auto bg-white ">
      {isSidebarOpen && (
        <MemberUserSidebar onClose={() => setIsSidebarOpen(false)} />
      )}

      <Routes>
        <Route path="/*" element={<MemberUserDashboard />} />
        <Route
          path="/schools&course"
          element={<Schools isSidebarOpen={isSidebarOpen} />}
        />
        <Route
          path="/applications/*"
          element={<Applications isSidebarOpen={isSidebarOpen} />}
        />
      </Routes>
    </div>
  );
};

export default MemberHome;
