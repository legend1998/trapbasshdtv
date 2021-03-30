import React from "react";
import { useState } from "react";
import { firedb } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";

function UpdateProfile({ close }) {
  const [{ user }, dispatch] = useStateValue();
  const [profile, setprofile] = useState({});

  const updateprofile = () => {
    if (profile.phone.length !== 10) {
      alert("enter valid phone number");
      return;
    }
    firedb
      .collection("user")
      .doc(user.email)
      .update(profile)
      .then((doc) => {
        console.log(doc);
        localStorage.clear();
        dispatch({
          type: "SET_USER",
          user: doc.data(),
        });
        alert("succss relogin to update.");
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div className="song-detail-container">
      <div className="song-detail">
        <p className="text-muted">phone Number</p>
        <input
          type="number"
          className="form-control"
          onChange={(e) => setprofile({ ...profile, phone: e.target.value })}
          required
        />
        <button className="btn btn-outline-success" onClick={updateprofile}>
          update
        </button>
        <button className="btn btn-outline-danger" onClick={() => close(false)}>
          close
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile;
