import React from "react";

function Login() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center login-body">
      <div className="login-form-div p-3">
        <form className="login-form d-flex align-items-end flex-column p-2">
          <div className="login-logo "></div>
          <input
            type="text"
            className="input-field mt-2"
            placeholder="username or email"
          />
          <input
            type="password"
            className="input-field mt-2"
            placeholder="password"
          />
          <p role="button">forgot password?</p>
          <button
            className=" mt-1 btn  btn-outline-light  form-control"
            type="button"
            value="Login"
          >
            Login
          </button>
          <p role="button">new user sign up here</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
