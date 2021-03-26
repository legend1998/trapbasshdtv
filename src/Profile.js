import React from "react";
import TopHeader from "./TopHeader";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";
function Profile() {
  const [{ user }] = useStateValue();
  const [show, setshow] = useState(false);

  return (
    <div className="col-sm withdrawel p-0">
      <div className="top-header-container">
        <TopHeader heading="My Profile" />
      </div>
      {show ? <UpdateProfile close={setshow} /> : null}
      <div className="container">
        <h3>user Details</h3>
        <div className="row">
          <div className="col-sm">
            <Avatar />
          </div>
          {!user.displayName ? (
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
          ) : (
            <div className="col-sm">
              <button
                className="btn btn-outline-success"
                onClick={() => setshow(true)}
              >
                update profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
