import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./thumb.jpg";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import ReportIcon from "@material-ui/icons/Report";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
function Header() {
  const [collapsed, setcollapsed] = useState(false);

  const toggler = (e) => {
    var nav = document.getElementById("sidebar-nav").childNodes;
    nav.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  useEffect(() => {
    document.addEventListener("resize", () => {
      if (document.body.clientWidth < 700) {
        setcollapsed(true);
      }
    });
  }, []);

  const collapsesidebar = () => {
    var sidebar = document.getElementById("sidebar");
    var topheader = document.getElementById("topheader");
    var logoside = document.getElementById("logoside");

    if (collapsed) {
      sidebar.style.width = 50 + "px";
      topheader.style.left = 50 + "px";
      logoside.style.display = "none";

      setcollapsed(false);
    } else {
      sidebar.style.width = 200 + "px";
      topheader.style.left = 200 + "px";
      logoside.style.display = "block";

      setcollapsed(true);
    }
  };
  return (
    <div className="side-header" id="sidebar">
      <div className="header-box text-light">
        <div className="logo-side_header d-flex align-items-center justify-content-around ">
          <img
            id="logoside"
            src="https://app.fronicmedia.com/static/media/Fronic_Logo_white.27f34786.png"
            alt=""
          />
          {!collapsed ? (
            <MenuIcon role="button" onClick={collapsesidebar} />
          ) : (
            <ArrowBackIosIcon role="button" onClick={collapsesidebar} />
          )}
        </div>

        <div className="navigation mt-4">
          <div className="navbar-nav sidebar-nav " id="sidebar-nav">
            <Link to="/" className="active   " onClick={(e) => toggler(e)}>
              <HomeIcon className="navitem" />
              DashBoard
            </Link>
            <Link to="catalog" onClick={(e) => toggler(e)}>
              <LibraryMusicIcon className="navitem" />
              Catalog
            </Link>
            <Link to="createrelease" onClick={(e) => toggler(e)}>
              <NewReleasesIcon className="navitem" />
              Create Release
            </Link>
            <Link to="reports" onClick={(e) => toggler(e)}>
              <ReportIcon className="navitem" />
              Reports
            </Link>
            <Link to="tickets" onClick={(e) => toggler(e)}>
              <ConfirmationNumberIcon className="navitem" />
              Tickets
            </Link>
            <Link to="withdrawel" onClick={(e) => toggler(e)}>
              <MonetizationOnIcon className="navitem" />
              WithDrawel
            </Link>
            <Link to="logout">
              <ExitToAppIcon className="navitem" />
              Log out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
