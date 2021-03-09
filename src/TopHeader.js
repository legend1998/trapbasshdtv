import React, { useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function TopHeader({ heading }) {
  useEffect(() => {
    document.getElementById("topheader").style.left = document.getElementById(
      "sidebar"
    ).style.width;
  }, []);
  return (
    <div className="topheader" id="topheader">
      <nav className="navbar navbar-expand navbar-light bg-dark justify-content-between text-light p-2">
        <h6>{heading}</h6>
        <div className=" text-light">
          <ul className="navbar-nav">
            <li className="nav-item ">Total Revenue : 0 Rs</li>
            <li className="nav-item">
              <AccountCircleIcon />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default TopHeader;
