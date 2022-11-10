import React from "react";
import "../Styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";

function OrderHistoryCard() {
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
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  View Details
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
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

export default OrderHistoryCard;
