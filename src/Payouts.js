import React from "react";
import TopHeader from "./TopHeader";

function Payouts() {
  const style = {
    fontfamily: {
      fontFamily: "serif",
    },
  };

  return (
    <div className="col-sm p-0 reports">
      <div className="top-header-container">
        <TopHeader heading="Payouts" />
      </div>
      <div className="container-fluid  p-2 " style={style.fontfamily}>
        <div className="card m-2 ">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="card-title fs-3 font-weight-bolder">
              Total Earnings
            </div>
            <h2>15000 &#x20B9;</h2>
          </div>
        </div>
        <div className="card m-2">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="card-title fs-3 font-weight-bolder">
              Outstanding Earnings
            </div>
            <h2>4000 &#x20B9;</h2>
          </div>
        </div>
      </div>
      <div className="container m-2 p-2">
        <table className="table">
          <thead>
            <tr>
              <th>Sl no.</th>
              <th>Description </th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payouts;
