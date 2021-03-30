import React, { useEffect } from "react";
import { useState } from "react";
import { firedb } from "./firebaseConfig";
import NewTicket from "./NewTicket";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

import TopHeader from "./TopHeader";

function Tickets() {
  const [Ticket, setTicket] = useState([]);
  const [{ user }] = useStateValue();
  const [showdialog, setshowdialog] = useState(false);
  useEffect(() => {
    firedb
      .collection("user")
      .doc(user.email)
      .collection("tickets")
      .onSnapshot((snapshot) => {
        var a = [];
        snapshot.docs.forEach((doc) => {
          var data = doc.data();
          data = { ...data, id: doc.id };
          a.unshift(data);
        });
        setTicket(a);
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
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {Ticket.map((t, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{t.reason}</td>
                <td>{t?.status ? t.status : "pending"}</td>
                <td>
                  <Link className="btn btn-warning" to={`ticket/${t.id}`}>
                    view
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tickets;
