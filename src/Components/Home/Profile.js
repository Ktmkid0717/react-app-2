import React, { useState, useEffect } from "react";
import "./homeLayout.css";
import { Link, Navigate, NavLink } from "react-router-dom";
const Profile = (props) => {
  const [user, setUser] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    getapiUser();
  }, []);
  const getapiUser = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    setUser(json.data);
  };
  const handleChange = (e) => {
    let value = e.target.value.toUpperCase();
    setValue(value);
    console.log(value);
    const search = user.filter(
      (item) => item.first_name.toUpperCase().indexOf(value) !== -1
    );
    if (value !== "") {
      setUser(search);
    } else {
      getapiUser();
      setValue("");
    }
  };

  console.log(user);
  return (
    <div className="content-section">
      <div className="search-bar">
        <div className="search-logo"></div>
        <div>
          <input
            type="text"
            className="input-control"
            placeholder="Search..."
            onChange={(e) => handleChange(e)}
            value={value}
          />
        </div>
      </div>
      <div className="patient-container">
        <div className="header-text">User List</div>
        <div className="row">
          {user &&
            user.map((item) => (
              <div className="container-1" key={item.id}>
                <div className="section-head">
                  <div className="head-1">{item.id}</div>
                  <div className="head-2">...</div>
                </div>
                <div className="section-img">
                  <img src={item.avatar} />
                </div>
                <div className="section-info">
                  <Link to="/profile" state={item}>
                    <div className="info-name">
                      {" "}
                      {item.first_name}
                      <div>{item.last_name}</div>{" "}
                    </div>
                  </Link>

                  <div className="info-status"> Active</div>
                </div>
              </div>
            ))}

          <div className="container-1 add-card">
            <div className="plus alt">
              {/* <div className="plus-icon-1"></div> */}
            </div>
            <div className="add-text">
              Create new <div>user profile</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-line"></div>
    </div>
  );
};
export default Profile;
