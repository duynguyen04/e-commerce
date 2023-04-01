import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from 'react-router-dom';
// import UserAPI from "../API/UserAPI";
// import { AuthContext } from "../Context/AuthContext";
import axiosClient from "../API/axiosClient";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  // const { loading, error, dispatch } = useContext(AuthContext);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // const response = await UserAPI.getAllData();
      // setUser(response);
    };

    // fetchData();
  }, []);
  // console.log("dâđasadsađâsdsad");
  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    axiosClient
      .post("/users/signin-admin", data)
      .then((res) => {
        console.log(res);
        if (res.status === 401) {
          throw new Error("Validation failed.");
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Could not authenticate you!");
        }
        return res;
      })
      .then((resData) => {
        // console.log(resData);
        // localStorage.setItem("token", resData.data.token);
        localStorage.setItem("userId", resData.data.userId);
        localStorage.setItem("role", resData.data.role);

        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        window.location.href = "/";
      })
      .catch((err) => console.log(err.message));
    // if (findUser.password !== password) {
    // 	setErrorPassword(true);
    // 	return;
    // } else {
    // 	setErrorPassword(false);
    // 	localStorage.setItem('id_user', findUser._id);
    // 	localStorage.setItem('name_user', findUser.fullname);
    // 	const action = addSession(localStorage.getItem('id_user'));
    // 	dispatch(action);
    // 	setCheckPush(true);
    // }
  };

  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <div className="row">
          <div className="login">
            <div className="heading">
              <h2>Sign in</h2>
              <form action="#">
                <div className="input-group input-group-lg">
                  <span className="input-group-addon">
                    <i className="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-group input-group-lg">
                  <span className="input-group-addon">
                    <i className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="button" className="float" onClick={handleSubmit}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
