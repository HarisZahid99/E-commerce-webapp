import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Shoes from "../Images/Shoes.jpg";
import Laptop from "../Images/Laptop.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CartCard from "./CartCard";
import { get_cart } from "../requests";

function Cart() {
  //Set nav paths
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [dataRendered, setStatus] = useState(0); // 0: no show, 1: show yes
  var items = [];
  var items_length = 0;

  const add_orders = async () => {
    await add_orders().then((response) => {
      console.log(response);
    });
  };
  const payment_route = () => {
    let path = `/checkout`;
    navigate(path);
  };

 
    const [state, setState] = useState({})
    const handleCallback = payload => {
        setState(payload)

        console.log(state)
    }
  

  
  const checkDataRender = (status) => {
    setStatus(status);
  };
  useEffect(() => {
    get_cart(localStorage.getItem("cart_id")).then((response) => {
      console.log(response.data);
      items = response.data;
      setData(items);
      checkDataRender(1);
    });
  }, []);

  const getSubtotal = () => {
    
    let price = 0;
    data.forEach((item) => {
      price += item.item_quantity * item.item_price;
    });

    return price.toFixed(2);
  };

  const getTax = () => {
    let price = getSubtotal();
    return (price * 1.13 - price).toFixed(2);
  };
  const getTot = () => {
    let price = getSubtotal();
    let tax = getTax();
    let total = parseFloat(price) + parseFloat(tax)
    return total

    localStorage.setItem("order_price", total);
    localStorage.setItem("order_quantity", data.length);
  };

  return (
    <div>
      <NavBar></NavBar>

      <div class="row">
        <div class="col-md-7 border-left">
          <div>
            {dataRendered == 1 && data.map((item) => <CartCard props={item} />)}
            {dataRendered == 0 && (
              <h3>Nothing to show here! Please add an item to your cart</h3>
            )}
          </div>
        </div>

        {dataRendered == 1 && (
          <div class="col-md-5 float-right">
            <h2>Order Summary</h2>
            <h3>Subtotal: $ {getSubtotal()}</h3>
            <h3>Tax: $ {getTax()}</h3>
            <h4>Total: $ {getTot()}</h4>
            
          <div>
          <button
            class="btn btn btn-outline-secondary my-4 mx-2"
            type="button"
            onClick={payment_route}
          >
            Purchase
          </button>
          </div>
        
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
