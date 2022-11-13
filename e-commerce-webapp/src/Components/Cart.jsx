import React, { useRef } from "react";
import "../Styles/App.scss";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Cart(){

  return (
    <div>
      <NavBar/>
    </div>
  );
}

export default Cart;
