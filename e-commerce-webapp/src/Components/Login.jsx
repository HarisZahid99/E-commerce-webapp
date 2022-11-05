//Import modules
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import StoreLogo from "../Images/logo-s1.png";
import "../Styles/Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
//Set nav paths 
  let navigate = useNavigate();
  //for login -> redirect to home
  const login_route = () => {
    let path = `/home`;
    navigate(path);
  };
  //for signup -> redire to signup
  const signup_route = () => {
    let path = `/signup`;
    navigate(path);
  };

  //TODO: ADD VAILIDATION TO CHECK IF USERNAME/PASSWORD EXISTS IF LOGIN PAGE SELECTED
  return (
    <div>
      <div class="logo">
        <img src={StoreLogo} title="nozama logo" height="60"></img>
      </div>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="lineOne">
        <div class="content">
          <h1>Welcome back!</h1>
          <div class="field">
            <div class="input-group mb-2">
              <input
                type="text"
                class="input-group-text form-control"
                placeholder="Username"
                aria-label="username"
                aria-describedby="basic-addon2"
                required
              />
            </div>
            <div class="input-group mb-2">
              <input
                type="text"
                class="input-group-text form-control"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon2"
                required
              />
            </div>
            <div class="btn-toolbar d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-secondary  m-4"
                onClick={login_route}
              >
                Login
              </button>

              <button
                type="button"
                class="btn btn-secondary  m-4"
                onClick={signup_route}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
