import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, firedb } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";

function Signup() {
  const [User, setUser] = useState({ email: null, password: null });
  const [dispatch] = useStateValue();
  const history = useHistory();
  const signup = () => {
    if (
      Object.keys(User).length < 4 ||
      User.phone.length < 10 ||
      User.name.length < 4
    ) {
      alert("fill details carefully");
      return;
    }
    firedb
      .collection("user")
      .doc(User.email)
      .set({ email: User.email, phone: User.phone, name: User.name })
      .then((doc) => {
        auth
          .createUserWithEmailAndPassword(User.email, User.password)
          .then(() => {
            history.replace("/login");
          })
          .catch((e) => {
            alert(e);
          });
      })
      .catch((e) => {
        alert("error", e);
      });
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center login-body">
      <div className="login-form-div p-3">
        <form className="login-form d-flex align-items-end flex-column p-2">
          <div className="login-logo ">
            <img
              src="https://app.fronicmedia.com/static/media/Fronic_Logo_white.27f34786.png"
              alt=""
              width="100px"
            />
          </div>
          <input
            type="text"
            className="input-field mt-2"
            placeholder="email"
            onChange={(e) => setUser({ ...User, email: e.target.value })}
          />
          <input
            type="text"
            className="input-field mt-2"
            placeholder="name "
            onChange={(e) => setUser({ ...User, name: e.target.value })}
          />
          <input
            type="text"
            className="input-field mt-2"
            placeholder="phone"
            onChange={(e) => setUser({ ...User, phone: e.target.value })}
          />
          <input
            type="password"
            className="input-field mt-2"
            placeholder="password"
            onChange={(e) => setUser({ ...User, password: e.target.value })}
          />
          <button
            className=" mt-1 btn  btn-outline-light  form-control"
            type="button"
            value="Login"
            onClick={signup}
          >
            Sign up
          </button>
        </form>
        <Link to="/login">already have an id login here</Link>
      </div>
    </div>
  );
}

export default Signup;
