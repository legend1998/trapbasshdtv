import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { useState } from "react";
import { firedb } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";

function NewTicket({ closetab }) {
  const [ticket, setTicket] = useState({ status: "ongoing", date: Date.now() });
  const [{ user }] = useStateValue();

  const submitTicket = () => {
    if (Object.keys(ticket).length < 2) return;
    console.log(ticket);
    // little work left here.
    firedb
      .collection("user")
      .doc(user.email)
      .collection("tickets")
      .add(ticket)
      .then((doc) => {
        alert("ticket created.");
      })
      .catch((e) => {
        alert(e);
      });
  };
  console.log(ticket);
  return (
    <div className="song-detail-container">
      <div className="song-detail text-left">
        <CancelIcon className="cancelbutton" onClick={() => closetab(false)} />
        <h4>Add new Ticket</h4>
        <br />
        <p className="text-muted">Reason</p>
        <select
          name="reason"
          className="form-control"
          onChange={(e) => setTicket({ ...ticket, reason: e.target.value })}
        >
          <option value="default" selected>
            default
          </option>
          <option value="change in release">change in release</option>
          <option value="callertune codes">callertune codes</option>
          <option value="delivery status">delivery status</option>
          <option value="takedown request">takedown request</option>
        </select>
        <p className="text-muted">describe it.</p>
        <textarea
          type="text-area"
          className="form-control"
          onChange={(e) =>
            setTicket({ ...ticket, description: e.target.value })
          }
        />
        <br />
        <p className="text-muted">upload attachments</p>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setTicket({ ...ticket, file: e.target.files[0] })}
        />
        <p className="text-muted">
          supported file formats *jpg *png *txt *pdf *docx
        </p>
        <br />
        <button className="btn btn-outline-success" onClick={submitTicket}>
          create
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => closetab(false)}
        >
          close
        </button>
      </div>
    </div>
  );
}

export default NewTicket;
