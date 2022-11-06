import React, { useRef } from "react";
import "../Styles/App.scss";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

let state = {
  user: {
    email: "tmu@gmail.com",
    name: "John Wayne",
    phone: "416",
    address: "3345 Road",
    ads: "yes",
    type: "Seller",
    username: "jwayne",
    password: "2hfhfhfhfh",
  },
  products: [
    { id: 1, item: "Shoes", price: "$5" },
    { id: 2, item: "Laptop", price: "$300" },
    { id: 3, item: "Laptop", price: "$300" },
    { id: 4, item: "Laptop", price: "$300" },
    { id: 5, item: "Laptop", price: "$300" },
  ],
  emailOpt: "no",
  store: {
    storeName: "Live Laugh Love",
    storeId: 12123133,
  },
};

function handleEmails(event) {
  this.setState({ emailOpt: event.target.value });
}

function SubmitChanges() {
  let updateUser = {
    email: this.Email.current.value,
    name: this.Name.current.value,
    phone: this.Phone.current.value,
    address: this.Addrress.current.value,
    ads: state.emailOpt,
  };
  this.setState({ isToggled: true, user: updateUser });
}

function Profile() {
  const name = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);
  const address = useRef(null);
  const username = useRef(null);
  const password = useRef(null);

  //Set nav paths
  let navigate = useNavigate();
  //for login -> redirect to home
  const save_route = () => {
    //TODO: HANDLE SUBMISSION AND UPDATE DB/FIELDSR
  };
  //for cancel -> rediret to home
  const cancel_route = () => {
    let path = `/home`;
    navigate(path);
  };

  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <img src={StoreLogo} title="nozama" height="60"></img>
          <form class="d-flex">
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={cancel_route}
            >
              Home
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
            <span class="font-weight-bold">{state.user.name}</span>
            <span class="text-black-50">{state.user.type}</span>
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
                defaultValue={state.user.name}
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                }}
                disabled={state.isToggled}
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
                defaultValue={state.user.email}
                disabled={state.isToggled}
                className="form-control"
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="Phone">Phone Number</label>
              <input
                ref={phoneNumber}
                id="Phone"
                type="text"
                defaultValue={state.user.phone}
                disabled={state.isToggled}
                className="form-control"
              />
            </div>
            <div className="form-group  py-2">
              <label htmlFor="Address">Address</label>
              <input
                ref={address}
                id="Address"
                type="text"
                defaultValue={state.user.address}
                disabled={state.isToggled}
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
                    defaultValue={state.user.username}
                    disabled={state.isToggled}
                    className="form-control"
                  />
                </div>

                <div class="form-group col-md-5 py-1">
                  <label htmlFor="Password">Password</label>
                  <input
                    ref={password}
                    id="Password"
                    type="password"
                    defaultValue={state.user.password}
                    disabled={state.isToggled}
                    className="form-control"
                  />
                </div>
              </div>
            </form>
            <div className="form-group py-4">
              <strong>Opt into Emails?:</strong>
              <label className="px-3">
                <input
                  disabled={state.isToggled}
                  type="radio"
                  value="yes"
                  checked={state.emailOpt === "yes"}
                  onChange={handleEmails}
                />
                <span className="px-2">Yes</span>
              </label>
              <label className="px-3">
                <input
                  disabled={state.isToggled}
                  type="radio"
                  value="no"
                  checked={state.emailOpt === "no"}
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
