import React from "react";
import "./homeLayout.css";
import Navbar from "./Navbar";
// import Profile from "./profile";
const HomeLayout = ({ children }) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <Navbar />
        {children}
        {/* <Navbar />
        <Profile /> */}
      </div>
    </div>
  );
};

export default HomeLayout;
