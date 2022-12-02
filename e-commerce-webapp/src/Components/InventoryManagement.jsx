import React, { useState, useRef, useEffect } from "react";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";

import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import InventoryCard from "./InventoryCard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { get_items, add_items } from "../requests";

function InventoryManagement() {
  const price_ref = useRef(null);
  const quantity_ref = useRef(null);
  const item_ref = useRef(null);
  const img_ref = useRef(null);
  const description_ref = useRef(null);
  const [show, setShow] = useState(false);
  var item_length = 0;
  var items = [];
  var local_data = [];
  const [data, setData] = useState(null);
  const [dataRendered, setStatus] = useState(0); // 0: no show, 1: show yes
 
  const item_price = {price_ref};
  const item_quantity = {quantity_ref}
  const item_name = {item_ref};
  const picture_url = {img_ref};
  const item_description = {description_ref};

  const handleClose = () => {
    setShow(false);
    add_items(item_price, item_quantity, item_name, picture_url, item_description, localStorage.getItem("account_id"))

  }
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

  const checkDataRender = (status) => {
    setStatus(status);
  };

  useEffect(() => {
    get_items(localStorage.getItem("account_id")).then((response) => {
      items = JSON.parse(response.data.data);
      setData(items);
      checkDataRender(1);
      item_length = items.length;
      localStorage.setItem("items", data);
    });
  }, []);

  return (
    <div>
      <NavBar />
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
              id="item_name"
              type="text"
              name="item"
              placeholder="Item Name"
              ref={item_ref}
              required
            />
          </div>
          <div class="form-group mb-2">
            <input
              class="text-field form-control"
              id="item_description"
              type="text"
              name="item description"
              placeholder="Item Description"
              ref={description_ref}
              required
            />
          </div>
          <div class="form-group mb-2">
            <input
              class="text-field form-control"
              id="item_price"
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
              id="item_quantity"
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
              id="picture_url"
              type="text"
              name="item Image"
              placeholder="Item URL"
              ref={img_ref}
              required
            />
          </div>
         
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        {dataRendered == 1 && data.map((item) => <InventoryCard props={item} />)}
             
           
          
      </div>
    </div>
  );
}

export default InventoryManagement;
