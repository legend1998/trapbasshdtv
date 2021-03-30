import React from "react";
import TopHeader from "./TopHeader";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";
function Profile() {
  const [{ user }] = useStateValue();
  const [show, setshow] = useState(false);
  console.log(user[0]);

  const style = {
    user: {
      backgroundColor: "#888",
      width: "190px",
      padding: "40px",
      borderRadius: "50%",
    },
  };
  return (
    <div className="col-sm withdrawel p-0">
      <div className="top-header-container">
        <TopHeader heading="My Profile" />
      </div>
      {show ? <UpdateProfile close={setshow} /> : null}
      <div className="container d-flex align-items-center justify-content-between">
        <p className="text-muted">user Details</p>
        <button
          className="btn btn-outline-success"
          onClick={() => setshow(true)}
        >
          update profile
        </button>
      </div>
      <div className="row">
        <div className="col-sm-4 d-flex justify-content-center text-center">
          <div style={style.user}>
            <i className="fas fa-user fa-7x"></i>
          </div>
        </div>
        <div className="col-sm">
          <p>
            <span className="text-muted">name</span> :{user.name}
          </p>
          <p>
            <span className="text-muted">email</span> : {user.email}
          </p>
          <p>
            <span className="text-muted">Phone</span> : {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
