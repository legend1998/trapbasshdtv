import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, firedb } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";

function Login() {
  const [User, setUser] = useState({ email: null, password: null });
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const login = () => {
    firedb
      .collection("user")
      .doc(User.email)
      .get()
      .then((doc) => {
        console.log(doc.data());
        auth
          .signInWithEmailAndPassword(User.email, User.password)
          .then(() => {
            history.replace("/panel/dashboard");
            dispatch({
              type: "SET_USER",
              user: doc.data(),
            });
            localStorage.setItem("user", JSON.stringify(doc.data()));
          })
          .catch((e) => {
            alert(e.message);
          });
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
            name="username"
            placeholder="username or email"
            onChange={(e) => setUser({ ...User, email: e.target.value })}
          />
          <input
            type="password"
            name="password"
            className="input-field mt-2"
            placeholder="password"
            onChange={(e) => setUser({ ...User, password: e.target.value })}
          />
          <p role="button">forgot password?</p>
          <button
            className=" mt-1 btn  btn-outline-light  form-control"
            type="button"
            value="Login"
            onClick={login}
          >
            Login
          </button>
          <Link to="/signup">new user? sign up here</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
