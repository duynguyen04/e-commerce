import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import axiosClient from "../API/axiosClient";

const Header = () => {
  const onRedirect = () => {
    localStorage.clear();
    axiosClient.post("/logout");
  };
  return (
    <header>
      <h3 className="title-header">Admin Page</h3>
      {localStorage.getItem("userId") ? (
        <div onClick={onRedirect}>
          <a href="/login">{localStorage.getItem("userId")} ( Logout )</a>
        </div>
      ) : (
        <a href="/login">Login</a>
      )}
      {/* <button id="login-logout">Đăng nhập</button> */}
    </header>
  );
};
export default Header;
