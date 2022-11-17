import React from "react";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";

import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import OrderHistoryCard from "./OrderHistoryCard";

function OrderHistory() {
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
        <NavBar/>
        <OrderHistoryCard/>

    </div>
  );
}

export default OrderHistory;
