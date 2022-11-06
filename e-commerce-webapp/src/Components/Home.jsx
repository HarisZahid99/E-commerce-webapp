import React from "react";
import "../Styles/App.scss";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import CartSymbol from "../Images/shopping-bag-line.svg";
import Corgi from "../Images/corgi-wave.png";
import Product from "./product/Item";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

function Home() {
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
  let inventory = [
    [
      { id: 1, item: "Shoes", price: "$5" },
      { id: 2, item: "Laptop", price: "$300" },
      { id: 3, item: "Laptop", price: "$300" },
      { id: 4, item: "Laptop", price: "$300" },
    ],
    [
      { id: 5, item: "Laptop", price: "$300" },
      { id: 6, item: "Laptop", price: "$300" },
      { id: 7, item: "Laptop", price: "$300" },
      { id: 8, item: "Laptop", price: "$300" },
    ],
    [
      { id: 9, item: "Shoes", price: "$800" },
      { id: 10, item: "Shoes", price: "$800" },
      { id: 11, item: "Shoes", price: "$800" },
      { id: 12, item: "Shoes", price: "$800" },
    ],
  ];

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <nav class="navbar">
        <div class="container-fluid">
          <img src={StoreLogo} title="nozama" height="60"></img>

          <div class="btn-toolbar d-flex justify-content-end">
            <div class="input-group my-4 mx-4 px-5 ">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" class="btn btn-outline-dark">
                Go
              </button>
            </div>

            <button
              type="button"
              class="btn btn btn-outline-secondary my-4 mx-2"
              onClick={cart_route}
            >
             Cart
            </button>
            <button
              type="button"
              class="btn btn btn-outline-secondary my-4 mx-2"
              onClick={edit_profile_route}
            >
              Edit Profile
            </button>

            <button
              type="button"
              class="btn btn-secondary  my-4 mx-2"
              onClick={logout_route}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <hr></hr>
      <div id="dropdown-container">
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/price-low-to-high">
              Price: Low to High
            </Dropdown.Item>
            <Dropdown.Item href="#/price-high-to-low">
              Price: High to Low
            </Dropdown.Item>
            <Dropdown.Item href="#/Rating-high-to-low">
              Rating: High to Low
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div id="body-content">
        <div id="categories">
          <h5>Price</h5>
          <div id="price-inputs">
            <input
              type="text"
              name="currency"
              class="price-input border border-dark"
              placeholder="$ Max"
              style={{ marginRight: "4px" }}
            />
            <input
              type="text"
              name="currency"
              class="price-input border border-dark"
              placeholder="$ Min"
              style={{ marginRight: "4px" }}
            />
            <button type="button" class="btn btn-light border border-dark ml-4">
              Go
            </button>
          </div>

          <h5>Colour</h5>
          <div id="colours-container">
            <button
              class="color-btn"
              style={{ backgroundColor: "green" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "red" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "blue" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "pink" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "purple" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "brown" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "black" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "grey" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "orange" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "cyan" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "silver" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "maroon" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "fuchsia" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "lime" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "olive" }}
            ></button>
            <button
              class="color-btn"
              style={{ backgroundColor: "navy" }}
            ></button>
          </div>

          <h5>Review</h5>
          <div class="stars">
            <a class="star-link" href="#">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span> & Up</span>
            </a>
            <a class="star-link" href="#">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span> & Up</span>
            </a>
            <a class="star-link" href="#">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span> & Up</span>
            </a>
            <a class="star-link" href="#">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span> & Up</span>
            </a>
            <a class="star-link" href="#">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span> & Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
