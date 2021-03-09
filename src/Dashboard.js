import React from "react";
import TopHeader from "./TopHeader";

function Dashboard() {
  return (
    <div className="dashboard flex-fill">
      <div className="top-header-place">
        <TopHeader heading="Dashboard" />
      </div>
      <h1> dashboard </h1>
    </div>
  );
}

export default Dashboard;
