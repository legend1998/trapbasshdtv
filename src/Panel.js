import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Catalog from "./Catalog";
import Dashboard from "./Dashboard";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Profile from "./Profile";
import ReleaseCreate from "./ReleaseCreate";
import Reports from "./Reports";
import Tickets from "./Tickets";

function Panel() {
  let { path } = useRouteMatch();
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwidth(window.innerWidth);
    });
  }, []);

  const style = {
    animate: {
      transition: "200ms",
    },
  };

  return (
    <div className="row " style={style.animate}>
      {width < 720 ? <MobileHeader /> : <Header />}
      <Route path={`${path}/catalog`}>
        <Catalog />
      </Route>
      <Route path={`${path}/profile`}>
        <Profile />
      </Route>
      <Route path={`${path}/tickets`}>
        <Tickets />
      </Route>
      <Route path={`${path}/reports`}>
        <Reports />
      </Route>
      <Route path={`${path}/releasecreate`}>
        <ReleaseCreate />
      </Route>
      <Route path={`${path}/dashboard`}>
        <Dashboard />
      </Route>
    </div>
  );
}

export default Panel;
