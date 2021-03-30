import React from "react";
import { Link, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import ReportIcon from "@material-ui/icons/Report";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CancelIcon from "@material-ui/icons/Cancel";
import { auth } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";
import { useState } from "react";

function Header() {
  let url = "/panel";
  const [{}, dispatch] = useStateValue();
  const [tab, settab] = useState(1);
  const history = useHistory();

  const logoutpopup = () => {
    document.getElementById("logout").style.display = "block";
  };
  const close = () => {
    document.getElementById("logout").style.display = "none";
  };

  const logout = () => {
    auth.signOut();
    dispatch({
      type: "DELETE_USER",
    });
    history.push("/");
  };

  var style = {
    cursor: {
      cursor: "pointer",
      paddingLeft: "30px",
      fontSize: "12px",
    },
    logoposition: {
      "margin-left": "30px",
      top: "30px",
      border: "1px solid red",
    },
    active: {
      background:
        "linear-gradient(90deg, rgb(180, 104, 224), rgb(228, 99, 196))",
      color: "white",
    },
  };

  return (
    <div className="side-header col-sm-2 m-0 p-0" id="sidebar">
      <div className="header-box text-light">
        <div className="logo-side_header d-flex align-items-center justify-content-around ">
          <Link to="/">
            <img
              id="logoside"
              src="https://app.fronicmedia.com/static/media/Fronic_Logo_white.27f34786.png"
              alt=""
            />
          </Link>
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
            <Link
              to={`${url}/dashboard`}
              style={tab === 1 ? style.active : null}
              onClick={() => settab(1)}
            >
              <HomeIcon className="navitem" />
              DashBoard
            </Link>
            <Link
              to={`${url}/catalog`}
              style={tab === 2 ? style.active : null}
              onClick={() => settab(2)}
            >
              <LibraryMusicIcon className="navitem" />
              Catalog
            </Link>
            <Link
              to={`${url}/createrelease`}
              style={tab === 3 ? style.active : null}
              onClick={() => settab(3)}
            >
              <NewReleasesIcon className="navitem" />
              Create Release
            </Link>
            <Link
              to={`${url}/payouts`}
              style={tab === 4 ? style.active : null}
              onClick={() => settab(4)}
            >
              <ReportIcon className="navitem" />
              Poyouts
            </Link>
            <Link
              to={`${url}/tickets`}
              style={tab === 5 ? style.active : null}
              onClick={() => settab(5)}
            >
              <ConfirmationNumberIcon className="navitem" />
              Tickets
            </Link>
            <Link
              to={`${url}/profile`}
              style={tab === 6 ? style.active : null}
              onClick={() => settab(6)}
            >
              <MonetizationOnIcon className="navitem" />
              My Profile
            </Link>
            <span
              className=" text-light "
              onClick={logoutpopup}
              style={style.cursor}
            >
              <ExitToAppIcon className="navitem" />
              Log out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
