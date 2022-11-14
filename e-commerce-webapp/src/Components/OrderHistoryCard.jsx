import React, { useState } from "react";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function OrderHistoryCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div class="card w-80 mx-4">
        <div class="card-body">
          <h3 class="card-title">Order #</h3>
          <h5 class="card-subtitle mb-2 text-muted">$13.40</h5>
          <div class="row">
            <div class="col-md-9 border-right">
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur quam justo, commodo et commodo sit amet, laoreet sit
                amet arcu. Curabitur scelerisque semper nisl, eu suscipit ex
                ultricies non. In nisi lectus, tincidunt ut cursus vitae,
                egestas sed enim. Fusce ac sem ac justo tristique hendrerit vel
                vitae sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vestibulum at dolor nisi. Sed vel ligula at quam feugiat
                gravida. Donec malesuada magna et purus accumsan euismod in quis
                sapien. Suspendisse non interdum metus, condimentum tempor
                ipsum. Curabitur justo ipsum, tempor eu rhoncus at, suscipit sed
                diam. Fusce facilisis eget arcu eget accumsan. Sed vel ante
                eleifend, faucibus nibh eget, ultrices augue. Aenean ornare
                luctus odio id vehicula. Nulla at nulla ac lacus pharetra tempor
                molestie et magna. Fusce vel commodo mauris. Mauris ornare felis
                eget erat accumsan, sed tincidunt orci mattis
              </p>
            </div>
            <div class="col-md-3">
              <img
                class="rounded float-right"
                width="350px"
                src="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"
              />

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
                  <Modal.Title>Order # - Item Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 Price <br></br>
                 Quantiy <br></br>
                 Item # <br></br>
                Item Description <br></br>
                Seller Name
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
