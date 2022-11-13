import React, { Component } from "react";
import * as React2 from 'react';
import "../App.css";
import StoreLogo from "../StoreLogo";
import SearchSymbol from "../search.svg"
import "bootstrap/dist/css/bootstrap.css";
import CartSymbol from "../shopping-bag-line.svg"
import Corgi from "../corgi-wave.png";
import Product from "./product/Product";
import Dropdown from 'react-bootstrap/Dropdown';


class StorePage extends Component{


    inventory = [
        [
            { id: 1, item: "Shoes", price: "$5" },
            { id: 2, item: "Laptop", price: "$300" },
            { id: 3, item: "Laptop", price: "$300" },
            { id: 4, item: "Laptop", price: "$300" }
        ],
        [
            { id: 5, item: "Laptop", price: "$300" },
            { id: 6, item: "Laptop", price: "$300" },
            { id: 7, item: "Laptop", price: "$300" },
            { id: 8, item: "Laptop", price: "$300" }
        ],
        [
            { id: 9, item: "Shoes", price: "$800" },
            { id: 10, item: "Shoes", price: "$800" },
            { id: 11, item: "Shoes", price: "$800" },
            { id: 12, item: "Shoes", price: "$800" }
        ]
      ];


    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div id="header-content">
                    <nav class='navbar navbar-expand-lg navbar-light bg-white navbar-custom'>
                        <img src={StoreLogo} title="The Store" height='80' class="mr-4"></img>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <form class="form-inline form-custom px-5" id="header-search">
                                <div class="input-group">
                                    <div class="form-outline">
                                        <input type="search" id="form1" class="form-control" placeholder="search" />
                                        {/* <label class="form-label" for="form1">Search</label> */}
                                    </div>
                                    <button type="button" class="btn btn-primary">
                                        <img src={SearchSymbol}></img>
                                    </button>
                                </div>
                            </form>

                            <div id="cart-profile">
                                <a class = 'mr-5' id="cart-link">
                                    <img src={CartSymbol}></img>
                                </a>
                                <a class='ml-5' id="profile-link">
                                    <img src={Corgi} class='rounded-circle border border-3 border-dark' height='50'></img>
                                </a>

                            </div> 
                        </div> 
                    </nav>
                </div>
                <hr></hr>
                <div id='dropdown-container'>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Sort By
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/price-low-to-high">Price: Low to High</Dropdown.Item>
                            <Dropdown.Item href="#/price-high-to-low">Price: High to Low</Dropdown.Item>
                            <Dropdown.Item href="#/Rating-high-to-low">Rating: High to Low</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id="body-content">
                    <div id="categories">
                        <h5>Price</h5>
                        <div id="price-inputs">
                            <input type='text' name='currency' class='price-input border border-dark' placeholder="$ Max" style={{marginRight: '4px'}}/>
                            <input type='text' name="currency" class='price-input border border-dark' placeholder="$ Min" style={{marginRight: '4px'}}/>
                            <button type="button" class= 'btn btn-light border border-dark ml-4'>Go</button>
                        </div>
                        
                        <h5>Colour</h5>
                        <div id='colours-container'>
                            <button class='color-btn' style={{backgroundColor: 'green'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'red'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'blue'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'pink'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'purple'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'brown'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'black'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'grey'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'orange'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'cyan'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'silver'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'maroon'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'fuchsia'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'lime'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'olive'}}></button>
                            <button class='color-btn' style={{backgroundColor: 'navy'}}></button>
                        </div>

                        <h5>Review</h5>
                        <div class='stars'>
                            <a class='star-link' href="#">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span>   & Up</span>
                            </a>
                            <a class='star-link' href="#">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span>   & Up</span>
                            </a>
                            <a class='star-link' href="#">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span>   & Up</span>
                            </a>
                            <a class='star-link' href="#">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span>   & Up</span>
                            </a>
                            <a class='star-link' href="#">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span>   & Up</span>
                            </a>
                        </div>
                        
                    </div>

                    <div id='items'>
                    {this.inventory.map((inv) =>(
                        <div className="row">
                        {inv.map((product) => (
                        <div className="col-sm-3">
                            <Product product={product} />
                        </div>
                        ))}
                    </div>
                        ))}
                    </div>

                </div>
                                
            </div>
            
            
        )
    }
}

export default StorePage;