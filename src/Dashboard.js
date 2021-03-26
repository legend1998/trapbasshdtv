import React from "react";
import { useRouteMatch } from "react-router";
import TopHeader from "./TopHeader";

function Dashboard() {
  let { url, path } = useRouteMatch();

  console.log(url, path);
  return (
    <div className="dashboard col-sm p-0">
      <div className="top-header-container ">
        <TopHeader heading="Dashboard" />
      </div>
      <h1> dashboard </h1>
    </div>
  );
}

export default Dashboard;
