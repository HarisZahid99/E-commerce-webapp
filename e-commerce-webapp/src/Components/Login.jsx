//Import modules
import React, {useRef} from "react";
import "bootstrap/dist/css/bootstrap.css";
import StoreLogo from "../Images/logo-s1.png";
import "../Styles/Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
    const username_ref = useRef(null);
    const password_ref = useRef(null);
  //Set nav paths
  let navigate = useNavigate();
  //for login -> redirect to home
  const login_route = () => {
      //TODO: ADD VAILIDATION TO CHECK IF USERNAME/PASSWORD EXISTS IF LOGIN PAGE SELECTED
    if ((username_ref.value && password_ref.value) != undefined){
        console.log(username_ref.current.value + "sdfs")
        let path = `/home`;
        navigate(path);
    }
    else{
        //TODO: ADD MODAL HERE
    }

  };
  //for signup -> redire to signup
  const signup_route = () => {
    let path = `/signup`;
    navigate(path);
  };

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
            <div class="form-group mb-2">
              <input
                class="text-field form-control"
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                ref={username_ref}
                required
              /> 
            </div>
            <div class="form-group mb-2">
              <input
                class="form-control text-field"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                ref={password_ref}
                required
              />
            </div>
            <div class="btn-toolbar d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-secondary m-4"
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
