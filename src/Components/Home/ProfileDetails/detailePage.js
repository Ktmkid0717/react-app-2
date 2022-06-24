import React from "react";
import { Table, Button } from "antd";
import "antd/dist/antd.css";
import "./detailePage.css";
import { NavLink } from "react-router-dom";
const DetailePage = ({ data }) => {
  console.log(data);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      // render: (text) => <a>{text}</a>,
      // responsive: ["sm"],
    },
    {
      title: "FirstName",
      dataIndex: "first_name",
      key: "first_name",
      // responsive: ["sm"],
    },
    {
      title: "LastName",
      dataIndex: "last_name",
      key: "last_name",
      // responsive: ["sm"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      // responsive: ["sm"],
    },
  ];
  return (
    <>
      <div className="detail-container ">
        <div>
          <NavLink to="/home">
            <Button className="back-btn">back</Button>
          </NavLink>
        </div>
        <div>
          <h2>Profile Details</h2>
          <div className="pro-img">
            <img src={data.avatar} />
          </div>
        </div>
        <Table
          pagination={false}
          columns={columns}
          dataSource={[data]}
          scroll={{ x: true }}
        />
      </div>
    </>
  );
};

export default DetailePage;
