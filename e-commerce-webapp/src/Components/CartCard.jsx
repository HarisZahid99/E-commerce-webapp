import React, { useRef } from "react";

import { add_orders } from "../requests";

function CartCard({ props }) {
 
  const id_ref = useRef(null);
  var i_ref = { id_ref };
  const add_orders = async () => {
    await add_orders(localStorage.getItem("account_id"), props.id).then(
      (response) => {
        console.log(response);
      }
    );
  };


  return (
    <div>
      <div class="card-columns">
        <div class="col mb-4">
          <div class="card h-10">
            <div
              className="row"
              style={{ paddingLeft: "40px", paddingTop: "0px" }}
            >
              <div class="card-body">
                <h3 class="card-title">{props.item_name}</h3>
                <h6 class="card-subtitle mb-2 text-muted"
                ref={id_ref}
                >
                  Item ID - {props.id}
                </h6>
                <h5 class="card-subtitle mb-2 text-muted">
                  ${props.item_price}
                </h5>
                <div id="quantity-container">
                  <h6 class="me-2" id="quantity-label">
                    Quantity - 1
                  </h6>
                  
                </div>
                <div class="row">
                  <div class="col-md-9 border-right">
                    <p class="card-text">{props.item_description}</p>
                  </div>
                  <div class="col-md-3">
                    <img
                      class="rounded float-right"
                      width="200px"
                      src={props.picture_url}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
