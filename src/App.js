import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  // useHistory,
} from "react-router-dom";
// import { useSelector } from "react-redux";
import Home from "./Components/Home";
import Login from "./Components/Auth";
// import { selectUser } from "./Components/Redux/userReducer";
import PrivateRoute from "./Routes/PrivateRoute";
import ProfilePage from "./Components/Home/ProfileDetails";
function App() {
  // const user = useSelector(selectUser);
  // const PrivateRoute = ({ children }) => {
  //   const auth = user;
  //   return auth ? children : <Navigate to="/auth" />;
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
