import React, { useRef, useState } from "react";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { add_buyer, add_seller } from "../requests";
import { reset } from "./reset";
import { useEffect } from "react";

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


  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [phoneNum, setPhoneNum] = useState(null)
  const [address, setAddress] = useState(null)
  const [optIn, setOptIn] = useState(null)
  const [storeName, setStoreName] = useState(null)
  const [storeId, setStoreId] = useState(null)

  const [sellerChecked, setStatus] = useState(0); // 0: no show, 1: show yes, 2: show no

  useEffect(() => {
    console.log(address)
  }, [address])

  let path = ``;
  const signup_route = async (event) => {
    event.preventDefault()
    console.log("Attempting to add user...")
    const isSellerChecked = sellerChecked === 1


    console.log("Determining whether to add buyer or seller")
    //If SN not null, then user is a seller
    if (isSellerChecked) {
     try {
      await add_seller({
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
        phone_number: phoneNum,
        address: address,
        opt_in: optIn,
        store_name: storeName,
        store_id: storeId,
        })
        path = `/home`;
     } catch (error) {
      alert("An error occured, please try again.");
     }
    }

     if (!isSellerChecked) {
      try {
        await add_buyer({
          first_name: firstName,
          last_name: lastName,
          email: email,
          username: username,
          password: password,
          phone_number: phoneNum,
          address: address,
          opt_in: optIn,
          store_name: storeName,
          store_id: storeId,
        })
        path = `/home`;
      } catch (error) {
        alert("An error occured, please try again.");
      }
     }
    await navigate(path);
    alert(`${isSellerChecked ? 'Seller' : 'Buyer'} added!`);
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
                onChange={e => setFirstName(e.target.value)}
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
                onChange={e => setLastName(e.target.value)}
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
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setUsername(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
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
                onChange={e => setPhoneNum(e.target.value)}
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
                onChange={e => setAddress(e.target.value)}
                
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
                    onChange={e => setStoreName(e.target.value)}
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
                    onChange={e => setStoreId(e.target.value)}
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
                  onChange={e => setOptIn(true)}
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
                  onChange={e => setOptIn(false)}
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
                onClick={event => signup_route(event)}
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
