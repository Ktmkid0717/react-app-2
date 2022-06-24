import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../Redux/userReducer";
const Navbar = () => {
  let dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout(null));
  };
  return (
    <>
      <div className="navbar-section">
        <div className="navbar-links">
          <h2 className="">User Profile</h2>
          <ul className="nav-column">
            <div className="dashboard">
              <div className="dashboard-logo"></div>
              <li className="nav-link">
                <NavLink to="/home">Home</NavLink>
              </li>
            </div>
            <div className="dashboard">
              <div className="enquires-logo"></div>
              <li className="nav-link">Enquires</li>
            </div>
            <div className="dashboard">
              <div className="profile-logo"></div>
              <li className="nav-link active-nav">Profiles</li>
            </div>
            <div className="dashboard">
              <div className="payment-logo"></div>
              <li className="nav-link">Payment</li>
            </div>
          </ul>
        </div>
        <div className="help-section">
          <div className="text">Need for logout?</div>
          <button className="help-btn" onClick={() => onLogout()}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
