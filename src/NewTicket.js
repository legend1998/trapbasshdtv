import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { useState } from "react";

function NewTicket({ closetab }) {
  const [ticket, setTicket] = useState({});

  const submitTicket = () => {
    if (Object.keys(ticket).length < 2) return;
    console.log(ticket);

    // little work left here.
  };

  return (
    <div className="song-detail-container">
      <div className="song-detail text-left">
        <CancelIcon className="cancelbutton" onClick={() => closetab(false)} />
        <h4>Add new Ticket</h4>
        <br />
        <p className="text-muted">Reason</p>
        <select
          name="reason"
          id=""
          className="form-control"
          onChange={(e) => setTicket({ ...ticket, reason: e.target.value })}
        >
          <option value="default" default>
            default
          </option>
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
          onChange={(e) => setTicket({ ...ticket, reason: e.target.files[0] })}
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
