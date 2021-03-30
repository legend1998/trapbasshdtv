import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Catalog from "./Catalog";
import Dashboard from "./Dashboard";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Profile from "./Profile";
import ReleaseCreate from "./ReleaseCreate";
import Payouts from "./Payouts";
import Tickets from "./Tickets";
import Chat from "./Chat";
import ViewCatalogItem from "./ViewCatalogItem";

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
    <div className="row" style={style.animate}>
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
      <Route path={`${path}/payouts`}>
        <Payouts />
      </Route>
      <Route path={`${path}/createrelease`}>
        <ReleaseCreate />
      </Route>
      <Route path={`${path}/dashboard`}>
        <Dashboard />
      </Route>
      <Route path={`${path}/album/:id`}>
        <ViewCatalogItem />
      </Route>
      <Route path={`${path}/ticket/:id`}>
        <Chat />
      </Route>
    </div>
  );
}

export default Panel;
