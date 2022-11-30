//Import modules
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import StoreLogo from "../Images/logo-s1.png";
import "../Styles/Login.scss";
import { useNavigate } from "react-router-dom";
import { login } from "../requests.js";
import { reset } from "./reset";

function Login() {

  reset()

  const username_ref = useRef(null);
  const password_ref = useRef(null);
  //Set nav paths
  let navigate = useNavigate();
  //for login -> redirect to home
  const login_route = async () => {
    await login({ username_ref }, { password_ref }).then((response) => {
      let path = ``;
      console.log(response)
      if (response.data.length == 0) {
        alert("Invaild credentials, please try again.");
      } else {
        var first_name = response.data[0].first_name;
        var last_name = response.data[0].last_name;
        var email = response.data[0].email;
        var username = response.data[0].username;
        var password = response.data[0].password;

        var phone_number = response.data[0].phone_number;
        var address = response.data[0].address;

        var opt_in = response.data[0].opt_in;

        var store_name = response.data[0].store_name;
        var store_id = response.data[0].store_id;
        var type = response.data[0].type;

        localStorage.setItem("first_name", first_name);
        localStorage.setItem("last_name", last_name);
    


        localStorage.setItem("email", email);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        
        localStorage.setItem("phone_number", phone_number);
        localStorage.setItem("address", address);
        localStorage.setItem("opt_in", opt_in);

        localStorage.setItem("store_name", store_name);
        localStorage.setItem("store_id", store_id);

        localStorage.setItem("type", type);
        if (type.includes("Seller")) {
          path = `/inventorymanagement`;
        } else {
          path = `/home`;
        }
        navigate(path);
      }
    });
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
