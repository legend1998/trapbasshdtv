import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

function MobileHeader() {
  const [tab, settab] = useState(1);
  const [toggle, settoggle] = useState(false);

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
    <nav className="mobileheader-container">
      <div className="nav navbar bg-dark text-light navbar-dark  mobileheader">
        <div className="menuicon">
          <MenuIcon onClick={() => settoggle(!toggle)} />
        </div>
        {toggle ? (
          <div className="navbar-nav" id="mobile-nav">
            <Link
              to="dashboard"
              style={tab === 1 ? style.active : null}
              onClick={() => settab(1)}
            >
              DashBoard
            </Link>
            <Link
              to="catalog"
              style={tab === 2 ? style.active : null}
              onClick={() => settab(2)}
            >
              Catalog
            </Link>
            <Link
              to="createrelease"
              style={tab === 3 ? style.active : null}
              onClick={() => settab(3)}
            >
              Create Release
            </Link>
            <Link
              to="payouts"
              style={tab === 4 ? style.active : null}
              onClick={() => settab(4)}
            >
              Poyouts
            </Link>
            <Link
              to="tickets"
              style={tab === 5 ? style.active : null}
              onClick={() => settab(5)}
            >
              Tickets
            </Link>
            <Link
              to="profile"
              style={tab === 6 ? style.active : null}
              onClick={() => settab(6)}
            >
              My Profile
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default MobileHeader;
