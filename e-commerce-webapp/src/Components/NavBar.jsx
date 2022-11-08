import React from "react";
import "../Styles/App.scss";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  //Set nav paths
  let navigate = useNavigate();
  //for edit profile -> redirect to /profile
  const edit_profile_route = () => {
    //TODO: ADD VAILIDATION TO CHECK IF USERNAME/PASSWORD EXISTS IF LOGIN PAGE SELECTED
    let path = `/profile`;
    navigate(path);
  };
  //for logout -> redire to login
  const logout_route = () => {
    let path = `/`;
    navigate(path);
  };

   //for logout -> redire to login
   const cart_route = () => {
    let path = `/cart`;
    navigate(path);
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <nav class="navbar">
        <div class="container-fluid">
          <img src={StoreLogo} title="nozama" height="60"></img>

          <div class="btn-toolbar d-flex justify-content-end">
            <div class="input-group my-4 mx-4 px-5 ">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" class="btn btn-outline-dark">
                Go
              </button>
            </div>

            <button
              type="button"
              class="btn btn btn-outline-secondary my-4 mx-2"
              onClick={cart_route}
            >
             Cart
            </button>
            <button
              type="button"
              class="btn btn btn-outline-secondary my-4 mx-2"
              onClick={edit_profile_route}
            >
              Edit Profile
            </button>

            <button
              type="button"
              class="btn btn-secondary  my-4 mx-2"
              onClick={logout_route}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      </div>
  );
}

export default NavBar;
