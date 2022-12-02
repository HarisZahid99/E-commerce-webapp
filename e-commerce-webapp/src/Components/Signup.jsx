import React, { useRef, useState } from "react";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { add_buyer, add_seller } from "../requests";
import { reset } from "./reset";

function Signup() {
  let navigate = useNavigate();
  const first_name_ref = useRef(null);
  const last_name_ref = useRef(null);
  const email_ref = useRef(null);
  const username_ref = useRef(null);
  const password_ref = useRef(null);
  const phone_number_ref = useRef(null);
  const address_ref = useRef(null);
  const opt_in_ref = useRef(null);
  const store_name_ref = useRef(null);
  const store_id_ref = useRef(null);

  const [sellerChecked, setStatus] = useState(0); // 0: no show, 1: show yes, 2: show no

  let path = ``;
  const signup_route = async () => {
    console.log("Attempting to add user...")
    var sN = store_name_ref.store_name_ref.current.value;
    console.log(sN)

    console.log("Determining whether to add buyer or seller")
    //If SN not null, then user is a seller
    if (sN != null) {
      await add_seller(
        { first_name_ref },
        { last_name_ref },
        { email_ref },
        { username_ref },
        { password_ref },
        { phone_number_ref },
        { address_ref },
        { opt_in_ref },
        { store_name_ref },
        { store_id_ref }
      ).then((response) => {
        if (response.data.length == 0) {
          alert("An error occured, please try again.");
        } else {
          path = `/home`;
        }
      });
    } else {
      await add_buyer(
        { first_name_ref },
        { last_name_ref },
        { email_ref },
        { username_ref },
        { password_ref },
        { phone_number_ref },
        { address_ref },
        { opt_in_ref }
      ).then((response) => {
        if (response.data.length == 0) {
          alert("An error occured, please try again.");
        } else {
          path = `/home`;
        }
      });
    }

    navigate(path);
  };
  //for cance -> redirect to /
  const cancel_route = () => {
    reset();
    let path = `/`;
    navigate(path);
  };

  const checkSeller = (status) => {
    setStatus(status);
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
                ref={first_name_ref}
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
                ref={last_name_ref}
                required
              />
            </div>
            <div class="form-group text-center p-2">
              <input
                class="form-control text-field"
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                ref={email_ref}
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
                ref={username_ref}
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
                ref={password_ref}
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
                ref={phone_number_ref}
                required
              />
            </div>
            <div class="form-group text-center p-2">
              <input
                class="form-control text-field"
                id="address"
                type="text"
                name="address"
                placeholder="Address"
                ref={address_ref}
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
                  value="Seller"
                  checked={sellerChecked === 1}
                  onClick={(e) => checkSeller(1)}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Buyer"
                  checked={sellerChecked === 2}
                  onClick={(e) => checkSeller(2)}
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>
            </div>

            {sellerChecked == true && (
              <div>
                <div class="form-group text-center p-2">
                  <input
                    class="form-control text-field"
                    id="store_name"
                    type="text"
                    name="store_name"
                    placeholder="Store Name"
                    ref={store_name_ref}
                    required
                  />
                </div>
                <div class="form-group text-center p-2">
                  <input
                    class="form-control text-field"
                    id="store_id"
                    type="text"
                    name="store_id"
                    placeholder="Store ID"
                    ref={store_id_ref}
                    required
                  />
                </div>
              </div>
            )}

            <div class="form-group text-center p-2">
              <div>
                <label for="sellerQ">
                  <b>Would you like to receive emails?</b>
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="opt_in"
                  id="opt_in"
                  value="true"
                  ref={opt_in_ref}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="opt_in"
                  id="opt_in"
                  value="false"
                  ref={opt_in_ref}
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <button
                class="btn btn-secondary m-4 w-25"
                id="create-btn"
                onClick={signup_route}
              >
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
