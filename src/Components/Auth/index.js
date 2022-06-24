import React, { useEffect } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { Form, Input, Button, notification } from "antd";
// import { apiInstance } from "../Apis/AuthApi";
import { login } from "../../Redux/userReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Context = React.createContext({
    name: "Default",
  });
  const [api, contextHolder] = notification.useNotification();
  //   const Context = React.createContext({
  //     name: "Default",
  //   });
  //   const [api, contextHolder] = notification.useNotification();

  //   const onSubmit = async (e) => {
  //     if (e && e.email && e.password) {
  //       let config = {
  //         strategy: "local",
  //         email: e.email,
  //         password: e.password,
  //       };
  //       const head = {
  //         headers: {
  //           "api-header-security":
  //             "C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx",
  //         },
  //       };

  //       apiInstance
  //         .post(" https://api.quikdr.com/authentication", config, head)
  //         .then((res) => {
  //           if (res?.data?.accessToken) {
  //             dispatch(
  //               login({
  //                 email: e.email,
  //                 password: e.password,
  //                 loggedIn: true,
  //                 accessToken: res.data.accessToken,
  //               })
  //             );

  //             navigate("/app");
  //           }
  //         })
  //         .catch((err) => {
  //           openNotification("bottomRight", "Invalid Credentials " + err.message);
  //           // console.log(err.message);
  //         });
  //     }
  //   };
  //   const openNotification = (placement, message) => {
  //     api.info({
  //       message: `Notification Alert`,
  //       description: (
  //         <Context.Consumer>{({ name }) => `${message}!`}</Context.Consumer>
  //       ),
  //       placement,
  //     });
  //   };
  useEffect(() => {
    // getapiUser();
  }, []);
  const onSubmit = async (e) => {
    if (e && e.email && e.password) {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // your expected POST request payload goes here

          email: e.email,
          password: e.password,
          //   email: "eve.holt@reqres.in",
          //   password: "cityslicka",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // enter you logic when the fetch is successful
          console.log(data);

          if (data?.token) {
            dispatch(
              login({
                email: e.email,
                password: e.password,
                loggedIn: true,
                accessToken: data.token,
              })
            );
            navigate("/home");
          } else if (data.error) {
            openNotification(
              "bottomRight",
              "Invalid Credentials " + data.error
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const openNotification = (placement, message) => {
    api.info({
      message: `Notification Alert`,
      description: (
        <Context.Consumer>{({ name }) => `${message}!`}</Context.Consumer>
      ),
      placement,
    });
  };
  return (
    <>
      <Context.Provider
        value={{
          name: "Ant Design",
        }}
      >
        {contextHolder}
        <div className="Login-main-container">
          <div className="Login-sub-container">
            <div className="logo-section">
              <div className="logo"> Logo</div>
            </div>
            <div className="Login-content-section">
              <Form
                name="basic"
                onFinish={onSubmit}
                // labelCol={{
                //   span: 8,
                // }}
                // wrapperCol={{
                //   span: 16,
                // }}
                // initialValues={{
                //   remember: true,
                // }}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                  ]}
                  wrapperCol={{
                    offset: 1,
                    span: 17,
                  }}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  wrapperCol={{
                    offset: 1,
                    span: 17,
                  }}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 6,
                    span: 12,
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    // className="login-form-button"
                    htmlType="submit"
                    block
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Context.Provider>
    </>
  );
};

export default Login;
