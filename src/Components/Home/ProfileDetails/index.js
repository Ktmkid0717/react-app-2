import React, { useState } from "react";
import HomeLayout from "../HomeLayout";
import DetailePage from "./detailePage";
import { useLocation } from "react-router-dom";
// export default HomeLayout;

const ProfilePage = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  //   const [showPopup, updateShowPopup] = useState(false);
  //   const [popUpData, updatePopupData] = useState();
  return (
    <>
      <HomeLayout>
        <DetailePage data={data} />
      </HomeLayout>
    </>
  );
};

export default ProfilePage;
