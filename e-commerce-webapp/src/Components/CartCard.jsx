import React, { useRef } from "react";

import { add_orders, remove_item_from_card } from "../requests";

function CartCard({ props, shouldRerender, setShouldRerender }) {
 
  const id_ref = useRef(null);
  var i_ref = { id_ref };
  const accountId = localStorage.getItem("account_id");
  const itemId = props.id;
  
  const add_orders = async () => {
    await add_orders(accountId, itemId).then(
      (response) => {
        console.log(response);
      }
    );
  };

  const removeItemFromCart = async() => {
   await remove_item_from_card(accountId, itemId);
   setShouldRerender(!shouldRerender)
  }


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
                <div id="quantity-container" display="flex" class="flex-column">
                  <h6 class="me-2" id="quantity-label"> Quantity - 1</h6>
                  <button
                      class="btn btn btn-outline-secondary mb-4"
                      type="button"
                      onClick={removeItemFromCart}
                    >
                    Remove
                  </button>
                  
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
