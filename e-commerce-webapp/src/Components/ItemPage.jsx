import React from "react";
import "../Styles/Item.scss";
import "bootstrap/dist/css/bootstrap.css";
import Product from "./product/Item";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Item from "./product/Item"
import shoes from "./../Images/Shoes.jpg";

function ItemPage(){
    return(
        <div id="main-container">
            <NavBar></NavBar>
            <hr></hr>
            <div id="body-content">
                <div id="item-info">
                    <div>
                        <h4 id="item-name">Item Name</h4>
                        <h6 id="item-number">Item #</h6>
                        <div id="quantity-container">
                            <h6 class='me-2' id="quantity-label">Quantity</h6>
                            <select id="quantity-dropdown">
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt asperiores rerum dignissimos, eveniet ipsa porro magni esse eum modi aliquid nulla vel quis necessitatibus animi repellat soluta ipsam laboriosam.</p>
                </div>
                <div id="item-price"><b>$Price</b></div>
                <div id="item-image-container">
                    <img src={shoes} id = "item-image"></img>
                </div>
                
            </div>
            <div id="footer-content">
                <button
                type="button"
                class="btn btn btn-outline-secondary my-4 mx-2"
                id="add-to-cart-btn"
                >
                Add to cart
                </button>
            </div>
            
        </div>
    )
}

export default ItemPage;