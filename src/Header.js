import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import ReportIcon from "@material-ui/icons/Report";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CancelIcon from "@material-ui/icons/Cancel";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const toggler = (e) => {
    var nav = document.getElementById("sidebar-nav").childNodes;
    nav.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const logoutpopup = () => {
    document.getElementById("logout").style.display = "block";
  };
  const close = () => {
    document.getElementById("logout").style.display = "none";
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "DELETE_USER" });
  };
  return (
    <div className="side-header col-sm-2" id="sidebar">
      <div className="header-box text-light">
        <div className="logo-side_header d-flex align-items-center justify-content-around ">
          <img
            id="logoside"
            src="https://app.fronicmedia.com/static/media/Fronic_Logo_white.27f34786.png"
            alt=""
          />
        </div>
        <div className="logout" id="logout">
          <CancelIcon onClick={close} />
          <div className="text">Are you suar?</div>
          <div className=" border d-flex justify-content-around">
            <p
              className="btn text-center btn-outline-dark flex-fill"
              onClick={logout}
            >
              Yes
            </p>
            <p
              className=" btn text-center flex-fill btn-outline-dark"
              onClick={close}
            >
              No
            </p>
          </div>
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
              Poyouts
            </Link>
            <Link to="tickets" onClick={(e) => toggler(e)}>
              <ConfirmationNumberIcon className="navitem" />
              Tickets
            </Link>
            <Link to="withdrawel" onClick={(e) => toggler(e)}>
              <MonetizationOnIcon className="navitem" />
              My Profile
            </Link>
            <Link onClick={logoutpopup}>
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
