import React from "react";
import { useState } from "react";
import { auth, firedb } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";

function UpdateProfile({ close }) {
  const [{ user }, dispatch] = useStateValue();
  const [profile, setprofile] = useState({});

  const updateprofile = () => {
    firedb
      .collection("user")
      .where("email", "==", user.email)
      .limit(1)
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        firedb
          .collection("user")
          .doc(snapshot.docs[0].ref.id)
          .update({
            profile,
          })
          .then((doc) => {
            alert("succss");
          })
          .catch((e) => {
            alert("can't update right now");
          });
      });
  };
  return (
    <div className="song-detail-container">
      <div className="song-detail">
        <p className="text-muted">display name</p>
        <input
          type="text"
          placeholder="john doe"
          className="form-control"
          onChange={(e) =>
            setprofile({ ...profile, displayName: e.target.value })
          }
          required
        />
        <p className="text-muted">phone Number</p>
        <input
          type="number"
          className="form-control"
          onChange={(e) => setprofile({ ...profile, phone: e.target.value })}
          required
        />
        <p className="text-muted">photo url</p>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setprofile({ ...profile, photo: e.target.value })}
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
