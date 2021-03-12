import React from "react";
import TopHeader from "./TopHeader";

function Dashboard() {
  return (
    <div className="dashboard col-sm p-0">
      <div className="top-header-container">
        <TopHeader heading="Dashboard" />
      </div>
      <h1> dashboard </h1>
    </div>
  );
}

export default Dashboard;
