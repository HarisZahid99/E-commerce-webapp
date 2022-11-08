import React from "react";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();

  //TODO: ADD VAILIDATION TO CHECK IF ALL TEXT FIELDS ARE VALID AND DB ENTRY IS SUCCESSFULL
  //for signup -> redire to /home once account create successfull
  const signup_route = () => {
    let path = `/signup`;
    navigate(path);
  };
  //for cance -> redirect to /
  const cancel_route = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div>
      <img src={StoreLogo} title="nozama" height="50"></img>
      <div class="d-flex justify-content-center">
        <div class="w-50 d-flex flex-column align-items-center justify-content-center">
          <h2 class="p-2">Create an account</h2>
          <form class="w-100">
            <div class="form-group text-center p-2">
              <input
                class="text-field form-control"
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div class="form-group text-center p-2">
              <input
                class="form-control text-field"
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div class="form-group text-center p-2">
              <input
                class="form-control text-field"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group text-center p-2">
              <input
                class="form-control text-field"
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div class="form-group text-center p-2">
              <input
                class="form-control text-field"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group text-center p-2">
              <input
                class="form-control text-field"
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                required
              />
            </div>
            <div class="form-group text-center p-2">
              <input
                class="form-control text-field"
                id="address"
                type="text"
                name="address"
                placeholder="Adress"
                required
              />
            </div>
            <div class="form-group text-center p-2">
              <div>
                <label for="sellerQ">
                  <b>Would you like to be a seller?</b>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-secondary m-4 w-25" id="create-btn"
                onClick={signup_route}>
                Sign Up
              </button>
              <button class="btn btn-secondary m-4 w-25" onClick={cancel_route}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
