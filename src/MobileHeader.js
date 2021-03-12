import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function MobileHeader() {
  const toggler = (e) => {
    var nav = document.getElementById("mobile-nav").childNodes;
    nav.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const togglemenu = () => {
    var menu = document.getElementById("mobile-nav");
    if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  };

  return (
    <nav className="mobileheader-container">
      <div className="nav navbar bg-dark text-light navbar-dark  mobileheader">
        <div className="menuicon">
          <MenuIcon onClick={togglemenu} />
        </div>
        <div className="navbar-nav" id="mobile-nav">
          <Link to="/" className="active   " onClick={(e) => toggler(e)}>
            DashBoard
          </Link>
          <Link to="catalog" onClick={(e) => toggler(e)}>
            Catalog
          </Link>
          <Link to="createrelease" onClick={(e) => toggler(e)}>
            Create Release
          </Link>
          <Link to="reports" onClick={(e) => toggler(e)}>
            Poyouts
          </Link>
          <Link to="tickets" onClick={(e) => toggler(e)}>
            Tickets
          </Link>
          <Link to="withdrawel" onClick={(e) => toggler(e)}>
            My Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MobileHeader;
