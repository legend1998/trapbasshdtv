import React, { useEffect } from "react";
import { useState } from "react";
import { firedb } from "./firebaseConfig";
import NewTicket from "./NewTicket";
import TopHeader from "./TopHeader";

function Tickets() {
  const [Ticket, setTicket] = useState([]);
  const [showdialog, setshowdialog] = useState(false);
  useEffect(() => {
    firedb.collection("ticket").onSnapshot((snapshot) => {
      setTicket(snapshot.docs);
    });
  }, []);
  return (
    <div className="tickets col-sm p-0">
      <div className="top-header-container">
        <TopHeader heading="Tickets" />
      </div>
      {showdialog ? <NewTicket closetab={setshowdialog} /> : null}
      <div className="container">
        <div className="d-flex align-items-center  justify-content-between ">
          <select name="" id="" className="form-control ticket-selector">
            <option value="all">all</option>
            <option value="some">some</option>
          </select>
          <button
            onClick={() => setshowdialog(true)}
            className="btn btn-outline-success"
          >
            New tickets
          </button>
        </div>
      </div>
      <div className="container">
        <table className="table ">
          <thead>
            <tr>
              <th>No.</th>
              <th>Reason</th>
              <th>Created At</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {Ticket.map((t, index) => (
              <tr>
                <td>{index}</td>
                <td>{t.reason}</td>
                <td>{t.createdAt}</td>
                <td>{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tickets;
