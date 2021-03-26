import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ user }] = useStateValue();
  const [scrolly, setScrollY] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  const style = {
    padding: {
      "padding-left": "30px",
    },
    headerBack: {
      "background-color": scrolly < 50 ? "#00000000" : "#3d0a3d",
    },
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg text-light  fixed-top justify-content-between "
        id="header-home"
        style={style.headerBack}
      >
        <div className="logo" style={style.padding}>
          <img
            src="https://app.fronicmedia.com/static/media/Fronic_Logo_white.27f34786.png"
            alt="logo"
            width="120px"
          />
        </div>
        <div>
          <div className="collapse navbar-collapse  p-3">
            <Link className="nav-item text-light nav-link" to="#home">
              Home
            </Link>
            <Link className="nav-item text-light nav-link" to="#about">
              About Us
            </Link>
            <Link className="nav-item text-light nav-link" to="#contact">
              Contact Us
            </Link>
            <Link className="nav-item text-light nav-link" to="#more">
              Know More
            </Link>
            {user ? (
              <Link
                className="nav-item text-light nav-link"
                to="panel/dashboard"
              >
                Dashboard
              </Link>
            ) : (
              <Link className="nav-item text-light nav-link" to="login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div
        className="h100 container-fluid d-flex align-items-center justify-content-center"
        id="homepage"
      >
        <div className="text-center">
          <h1 className="text-light text-center">
            TRAPBASS<span className="text-primary ">HDTV</span>
          </h1>
          <p className="text-center text-light">Earn from you Music</p> <br />
          <button className="btn-md btn btn-primary  ">Sign up now</button>
        </div>
      </div>
      <About />
    </div>
  );
}

export default Home;
