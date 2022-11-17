import React, { useState, useRef } from "react";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";

import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import InventoryCard from "./InventoryCard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function InventoryManagement() {

    const price_ref = useRef(null);
    const quantity_ref = useRef(null);
    const item_ref = useRef(null);
    const sellername_ref = useRef(null);
    const item_description_ref = useRef(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <div class="btn-toolbar d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-outline-primary float-right my-4 mx-2"
                  onClick={handleShow}
                >
                  +
                </button>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="form-group mb-2">
                    <input
                        class="text-field form-control"
                        id="username"
                        type="text"
                        name="price"
                        placeholder="Price"
                        ref={price_ref}
                        required
                    /> 
                </div>
                <div class="form-group mb-2">
                    <input
                        class="text-field form-control"
                        id="username"
                        type="text"
                        name="quantity"
                        placeholder="Quantity"
                        ref={quantity_ref}
                        required
                    /> 
                </div>
                <div class="form-group mb-2">
                    <input
                        class="text-field form-control"
                        id="username"
                        type="text"
                        name="item"
                        placeholder="Item"
                        ref={item_ref}
                        required
                    /> 
                </div>
                <div class="form-group mb-2">
                    <input
                        class="text-field form-control"
                        id="username"
                        type="text"
                        name="item description"
                        placeholder="Item Description"
                        ref={item_description_ref}
                        required
                    /> 
                </div>
                <div class="form-group mb-2">
                    <input
                        class="text-field form-control"
                        id="username"
                        type="text"
                        name="sellername"
                        placeholder="Seller Name"
                        ref={sellername_ref}
                        required
                    /> 
                </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
        <InventoryCard/>
        <InventoryCard/>
        <InventoryCard/>
        <InventoryCard/>
    </div>
  );
}

export default InventoryManagement;