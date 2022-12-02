import React, { useState } from "react";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Item from "./Item";

function OrderHistoryCard({props}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div class="card w-80 mx-4 my-4">
        <div class="card-body">
          <h3 class="card-title">Order # - {props.id}</h3>
          <h5 class="card-subtitle mb-2 text-muted">${props.order_price}</h5>
          <div class="row">
            <div class="col-md-9 border-right">
              <p class="card-text">
              Order status -  {props.order_status}
              </p>
            </div>
            <div class="col-md-3">
              

              <div class="btn-toolbar d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-outline-primary float-right my-4 mx-2"
                  onClick={handleShow}
                >
                  View Details
                </button>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Order# - {props.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 Order Price - ${props.order_price} <br></br>
                 Quantity - {props.order_qty} <br></br>
                 Item # - {props.item_id} <br></br>
                Seller ID - {props.account_id}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryCard;
