import React, { useRef } from "react";
import "../Styles/App.scss";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { get_user_info } from "../requests.js";
import { reset } from "./reset";

function handleEmails(event) {
  this.set({ emailOpt: event.target.value });
}

function SubmitChanges() {
  let updateUser = {
    email: this.Email.current.value,
    name: this.Name.current.value,
    phone: this.Phone.current.value,
    address: this.Addrress.current.value,
  };
  this.set({ isToggled: true, user: updateUser });
}

function Profile() {
  var user = {
    first_name: localStorage.getItem("first_name"),
    last_name: localStorage.getItem("last_name"),
    email: localStorage.getItem("email"),
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
    phone_number: localStorage.getItem("phone_number"),
    address: localStorage.getItem("address"),
    opt_in: localStorage.getItem("opt_in"),
    store_name: localStorage.getItem("store_name"),
    store_id: localStorage.getItem("store_id"),
    type: localStorage.getItem("type")
  };
  

  const name = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);
  const address = useRef(null);
  const username = useRef(null);
  const password = useRef(null);

  //Set nav paths
  let navigate = useNavigate();
  //for login -> redirect to home
  const save_route = () => {};
  //for cancel -> rediret to home
  const cancel_route = () => {
    let path = `/`;
    navigate(path);
  };
  //for logout -> rediret to /
  const logout_route = () => {
    reset()
    let path = `/`;
    navigate(path);
  };
  //for logout -> rediret to /car
  const cart_route = () => {
    let path = `/cart`;
    navigate(path);
  };
  //for invmgt -> rediret to /inventorymanagement
  const invmgt_route = () => {
    let path = `/inventorymanagement`;
    navigate(path);
  };

  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <img src={StoreLogo} title="nozama" height="60"></img>
          <form class="d-flex">
            {user.type == "Buyer" && (
              <button
                class="btn btn-outline-secondary mx-3"
                type="button"
                onClick={cart_route}
              >
                Cart
              </button>
            )}

            {user.type == "Seller" && (
              <button
                class="btn btn-outline-secondary mx-3"
                type="button"
                onClick={invmgt_route}
              >
                Inventory Management
              </button>
            )}

            <button
              class="btn btn-secondary mx-3"
              type="button"
              onClick={logout_route}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>

      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"
            />
            <span class="font-weight-bold">{user.first_name + " " + user.last_name}</span>
            <span class="text-black-50">{user.type}</span>
            {user.type == "Seller" && (
              <div>
                <span class="text-red-50">Store Name: {user.store_name}</span>
                <br />
                <span class="text-red-50">Store ID: {user.store_id}</span>
              </div>
            )}
            <span> </span>
          </div>
        </div>
        <div class="col-md-7 py-5 border-right">
          <form>
            <div className="form-group  py-2">
              <label htmlFor="Name">Name</label>
              <input
                ref={name}
                id="Name"
                defaultValue={user.first_name + " " + user.last_name}
                onChange={(e) => {
                  this.set({ value: e.target.value });
                }}
                disabled={user.isToggled}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="Email">Email</label>
              <input
                ref={email}
                id="Email"
                type="text"
                defaultValue={user.email}
                disabled={user.isToggled}
                className="form-control"
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="Phone">Phone Number</label>
              <input
                ref={phoneNumber}
                id="Phone"
                type="text"
                defaultValue={user.phone_number}
                disabled={user.isToggled}
                className="form-control"
              />
            </div>
            <div className="form-group  py-2">
              <label htmlFor="Address">Address</label>
              <input
                ref={address}
                id="Address"
                type="text"
                defaultValue={user.address}
                disabled={user.isToggled}
                className="form-control"
              />
            </div>
            <form>
              <div class="form-row py-2">
                <div class="form-group col-md-5 py-1">
                  <label htmlFor="Username">Username</label>
                  <input
                    ref={username}
                    id="Username"
                    type="text"
                    defaultValue={user.username}
                    disabled={user.isToggled}
                    className="form-control"
                  />
                </div>

                <div class="form-group col-md-5 py-1">
                  <label htmlFor="Password">Password</label>
                  <input
                    ref={password}
                    id="Password"
                    type="password"
                    defaultValue={user.password}
                    disabled={user.isToggled}
                    className="form-control"
                  />
                </div>
              </div>
            </form>
            <div className="form-group py-4">
              <strong>Opt into Emails?:</strong>
              <label className="px-3">
                <input
                  disabled={user.isToggled}
                  type="radio"
                  value="true"
                  checked={user.opt_in === true}
                  onChange={handleEmails}
                />
                <span className="px-2">Yes</span>
              </label>
              <label className="px-3">
                <input
                  disabled={user.isToggled}
                  type="radio"
                  value="false"
                  checked={user.opt_in === false}
                  onChange={handleEmails}
                />
                <span className="px-2">No</span>
              </label>
            </div>
          </form>
          <div class="btn-toolbar d-flex justify-content-end">
            <button
              type="button"
              class="btn btn btn-outline-secondary m-4"
              onClick={save_route}
            >
              Save
            </button>

            <button
              type="button"
              class="btn btn-secondary  m-4"
              onClick={cancel_route}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
