import React, { useRef, useState } from "react";
import "../Styles/App.scss";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import {
  edit_profile_buyer,
  edit_profile_seller,

} from "../requests.js";
import { reset } from "./reset";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavBar from "./NavBar";

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
    type: localStorage.getItem("type"),
  };

  const first_name_ref = useRef(null);
  const last_name_ref = useRef(null);
  const email_ref = useRef(null);
  const phone_number_ref = useRef(null);
  const address_ref = useRef(null);
  const username_ref = useRef(null);
  const password_ref = useRef(null);
  const opt_in_ref = useRef(null);

  var fN = { first_name_ref };
  var lN = { last_name_ref };
  var e = { email_ref };
  var u = { username_ref };
  var p = { password_ref };
  var pN = { phone_number_ref };
  var a = { address_ref };
  var o = { opt_in_ref };

  const [show, setShow] = useState(false);

  const [show_error] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseError = () => setShow(false);
  const handleShowError = () => setShow(true);

  //Set nav paths
  let navigate = useNavigate();
  //for login -> redirect to home
  const save_route = async () => {
    if (user.type.includes("Seller")) {
      await edit_profile_seller(fN, lN, e, u, p, pN, a, o).then((response) => {
        if (response.status == 200) {
          console.log("Seller info successfull updated");
          localStorage.setItem("first_name", fN.first_name_ref.current.value);
          localStorage.setItem("last_name", lN.last_name_ref.current.value);

          localStorage.setItem("email", e.email_ref.current.value);
          localStorage.setItem("username", u.username_ref.current.value);
          localStorage.setItem("password", p.password_ref.current.value);

          localStorage.setItem(
            "phone_number",
            pN.phone_number_ref.current.value
          );
          localStorage.setItem("address", a.address_ref.current.value);
          localStorage.setItem("opt_in", o.opt_in_ref.current.value);

          handleShow();
        } else {
          alert("Unable to update info. Pleas try again.");

          handleShowError();
        }
      });
    } else {
      await edit_profile_buyer(fN, lN, e, u, p, pN, a, o).then((response) => {
        if (response.status == 200) {
          console.log("Buyer info successfull updated");
          localStorage.setItem("first_name", fN.first_name_ref.current.value);
          localStorage.setItem("last_name", lN.last_name_ref.current.value);

          localStorage.setItem("email", e.email_ref.current.value);
          localStorage.setItem("username", u.username_ref.current.value);
          localStorage.setItem("password", p.password_ref.current.value);

          localStorage.setItem(
            "phone_number",
            pN.phone_number_ref.current.value
          );
          localStorage.setItem("address", a.address_ref.current.value);
          localStorage.setItem("opt_in", o.opt_in_ref.current.value);
        } else {
          alert("Unable to update info. Pleas try again.");
        }
      });
    }
  };
  //for cancel -> rediret to home
  const cancel_route = () => {
    let path = `/`;
    navigate(path);
  };
  //for logout -> rediret to /
  const logout_route = () => {
    reset();
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

  const handleEmails = (sel) => {
    user.opt_in = sel;
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Profile successfully updated</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      ;
      <Modal show={show_error} onHide={handleCloseError}>
        <Modal.Body>Profile successfully updated</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseError}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      ;
    <NavBar></NavBar>
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"
            />
            <span class="font-weight-bold">
              {user.first_name + " " + user.last_name}
            </span>
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
              <label htmlFor="First_Name">First Name</label>
              <input
                ref={first_name_ref}
                id="First_Name"
                defaultValue={user.first_name}
                onChange={(e) => {
                  this.set({ value: e.target.value });
                }}
                disabled={user.isToggled}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group  py-2">
              <label htmlFor="Last_Name">Last Name</label>
              <input
                ref={last_name_ref}
                id="Last_Name"
                defaultValue={user.last_name}
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
                ref={email_ref}
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
                ref={phone_number_ref}
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
                ref={address_ref}
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
                    ref={username_ref}
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
                    ref={password_ref}
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
                  ref={opt_in_ref}
                  disabled={user.isToggled}
                  type="radio"
                  value="true"
                  checked={(user.opt_in = true)}
                  onChange={handleEmails(true)}
                />
                <span className="px-2">Yes</span>
              </label>
              <label className="px-3">
                <input
                  ref={opt_in_ref}
                  disabled={user.isToggled}
                  type="radio"
                  value="false"
                  checked={(user.opt_in = false)}
                  onChange={handleEmails(false)}
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
