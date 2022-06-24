import HomeLayout from "./HomeLayout";
import Navbar from "./Navbar";
// export default HomeLayout;
import React, { useState } from "react";
import Profile from "./Profile";
import PopupWrapper from "../Common/PopupWrapper";
import PrivateRoute from "../../Routes/PrivateRoute";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  // useHistory,
} from "react-router-dom";
const Home = (props) => {
  const [showPopup, updateShowPopup] = useState(false);
  const [popUpData, updatePopupData] = useState();

  return (
    <>
      <HomeLayout>
        {/* <Navbar /> */}
        <Profile />
      </HomeLayout>
    </>
  );
};

export default Home;
