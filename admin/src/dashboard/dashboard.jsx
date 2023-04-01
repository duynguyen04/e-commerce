import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./dashboard.css";

const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Menu />
        {props.children}
      </div>
    </div>
  );
};
export default Dashboard;
