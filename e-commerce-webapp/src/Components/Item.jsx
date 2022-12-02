import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {add_cart} from '../requests'
function Item({ props, shouldRerender, setShouldRerender }) {

 

  const add_to_cart = async () =>{
   await add_cart(localStorage.getItem("account_id"), props.id).then((response)  => {
      console.log(response)
      alert('An item was added to your cart')
    })
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
                <h6 class="card-subtitle mb-2 text-muted">
                  Item ID - {props.id}
                </h6>
                <h5 class="card-subtitle mb-2 text-muted">
                  ${props.item_price}
                </h5>
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
              <div class="btn-toolbar d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-outline-primary float-right my-4 mx-4"
                  onClick={add_to_cart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
