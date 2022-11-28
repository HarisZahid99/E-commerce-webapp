import React, { useRef } from "react";
import "../Styles/App.scss";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

let state = {
  user: {
    name: "John Wayne",
    address: "3345 Road Street",
    postalCode: "A1B 2C3",
    province: "Ontario",
    address: "3345 Road Street",
    subtotal: "$1000.00",
    shipping: "$130.00",
    total: "$1130.00",
  },
  store: {
    storeName: "Live Laugh Love",
    storeId: 12123133,
  },
};

function Checkout() {
  const name = useRef(null);
  const address = useRef(null);
  const postalCode = useRef(null);
  const province = useRef(null);

  //Set nav paths
  let navigate = useNavigate();
  //for login -> redirect to home
  const save_route = () => {
    //TODO: HANDLE SUBMISSION AND UPDATE DB/FIELDSR
  };
  //for cancel -> rediret to home
  const cancel_route = () => {
    let path = `/`;
    navigate(path);
  };
  //for logout -> rediret to /
  const logout_route = () => {
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
            {state.user.type == "Buyer" && (
              <button
                class="btn btn-outline-secondary mx-3"
                type="button"
                onClick={cart_route}
              >
                Cart
              </button>
            )}

            {state.user.type == "Seller" && (
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

            <span class="font-weight-bold">{"Subtotal: " + state.user.subtotal}</span>
            <span class="font-weight-bold">{"Shipping: " + state.user.shipping}</span>
            <span class="font-weight-bold">{"Total: " + state.user.total}</span>

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
                defaultValue={state.user.address}
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
                    defaultValue={state.user.postalCode}
                    className="form-control"
                  />
              </div>
                
            <div class="form-row py-2">
              <label htmlFor="P">Province</label>
                <input
                  ref={province}
                  id="province"
                  type="text"
                  defaultValue={state.user.province}
                  className="form-control"
                />
            </div>
          </form>
            
          </form>
          <div class="btn-toolbar d-flex justify-content-end">
            <button
              type="button"
              class="btn btn btn-outline-secondary m-4"
              onClick={save_route}
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