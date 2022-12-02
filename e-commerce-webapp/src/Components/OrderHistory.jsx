import React, { useState, useRef, useEffect } from "react";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";

import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import OrderHistoryCard from "./OrderHistoryCard";
import { get_items, get_orders } from "../requests";

function OrderHistory() {
  //Set nav paths
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [dataRendered, setStatus] = useState(0); // 0: no show, 1: show yes
  var items = [];
  var items_length = 0;

  const checkDataRender = (status) => {
    setStatus(status);
  };
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

  useEffect(() => {
    get_orders(localStorage.getItem("account_id")).then((response) => {
      items = JSON.parse(response.data.data);
      setData(items);
      checkDataRender(1);
    });
  }, []);

  return (
    <div>
      <NavBar />
      {dataRendered == 1 &&
        data.map((order) => <OrderHistoryCard props={order} />)}

      {dataRendered == 0 && (
        <h3>
          Nothing to show here! Please create an order to view your order
          history
        </h3>
      )}
    </div>
  );
}

export default OrderHistory;
