import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { Header, Sidebar } from "./components";
import { Dashboard, Application } from "./pages";
import MemberHome from "./memberuser/MemberHome";
import Schools from "./memberuser/Schools";
import Signup from "./container/Signup";
import Login from "./container/Login";

const App = () => {
  return (
    <Router>
      {/* Page content */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MemberHome />} />
      </Routes>
    </Router>
  );
};

export default App;
