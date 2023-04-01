import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(props) {
  return (
    <div className="menu">
      <div className="item maginleft5">
        <Link to="/">Dashboard</Link>
      </div>
      <p className="item">COMPONENTS</p>
      <div className="item maginleft5">
        <Link to="/new-product">New Product</Link>
      </div>
      <div className="item maginleft5">
        <Link to="/customer">Customer</Link>
      </div>
      {/* <div class="dropdown">
        <button class="dropbtn">Table</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> */}
    </div>
  );
}

export default Menu;
