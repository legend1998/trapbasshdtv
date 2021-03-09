import React from "react";
import TopHeader from "./TopHeader";

function Tickets() {
  return (
    <div className="tickets flex-fill">
      <div className="top-header-container">
        <TopHeader heading="Tickets" />
      </div>
      <div className="container-fluid">
        <div className="d-flex align-items-center  justify-content-between ">
          <select name="" id="" className="form-control ticket-selector">
            <option value="all">all</option>
            <option value="some">some</option>
          </select>
          <button className="btn btn-outline-success">New tickets</button>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
