import React, { useRef } from "react";
import "../Styles/App.scss";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"


function Checkout() {
  const name = useRef(null);
  const address = useRef(null);
  const postalCode = useRef(null);
  const province = useRef(null);

  const n =  {name} ;
  const a = {address};
  const pC = {postalCode};
  const p = {province};


  //Set nav paths
  let navigate = useNavigate();
  //for login -> redirect to home
  const place_order_route = () => {
    //TODO: HANDLE SUBMISSION AND UPDATE DB/FIELDSR
  };
  //for cancel -> rediret to home
  const cancel_route = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div>
    <NavBar></NavBar>

      <div class="row ">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center rounded border border-5 p-3 py-5 p-3 mb-2 bg-secondary text-white">
          <label htmlFor="Payment Details">Payment Details</label>
            <div className="form-group  py-2">
            <input
                class="text-field form-control"
                id="Name"
                type="text"
                placeholder="Cardholder's Name"
                ref={name}
                required
              /> 
            </div>

            <div className="form-group  py-2">
              <input
                class="text-field form-control"
                id="Name"
                type="text"
                placeholder="Card Number"
                ref={name}
                required
              /> 
            </div>

            <div className="form-group  py-2">
              <input
                class="text-field form-control"
                id="Name"
                type="text"
                placeholder="Expiration"
                ref={name}
                required
              /> 
            </div>

            <div className="form-group  py-2">
              <input
                class="text-field form-control"
                id="Name"
                type="text"
                placeholder="CVV"
                ref={name}
                required
              />
            </div>

            <span class="font-weight-bold">{"Total: " + localStorage.getItem("order_total")}</span>


          </div>
        </div>
        <div class="col-md-7 py-5 border-right">
          <form>
            <div className="form-group  py-2">
              <label htmlFor="Name">Name</label>
              <input
                ref={name}
                id="Name"
                required
                type="text"
                className="form-control"
              />
            </div>
            
            <div className="form-group  py-2">
              <label htmlFor="Address">Address</label>
              <input
                ref={address}
                id="Address"
                type="text"
                required
                className="form-control"
              />
            </div>
            <form>
              <div class="form-row py-2">
                
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    ref={postalCode}
                    id="postalCode"
                    type="text"
                    required
                    className="form-control"
                  />
              </div>
                
            <div class="form-row py-2">
              <label htmlFor="P">Province</label>
                <input
                  ref={province}
                  id="province"
                  type="text"
                  required
                  className="form-control"
                />
            </div>
          </form>
            
          </form>
          <div class="btn-toolbar d-flex justify-content-end">
            <button
              type="button"
              class="btn btn btn-outline-secondary m-4"
              onClick={place_order_route}
            >
              Place Order
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

export default Checkout;