import React, { Component } from "react";
import StoreLogo from "../StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import Corgi from "../images/corgi-wave.png";
import Product from "./product/Item";

import { Link } from "react-router-dom";


class BuyerAccountCreation extends Component{

    constructor(props){
        super(props)
        this.state = {
            selectedOption: 'none' 
        }
    }
    
    handleChange = (event) => {
        this.setState({
             selectedOption: event.target.value
         });
        console.log(event.target.value);
    };

    render(){
        return(
            <div>
                <img src={StoreLogo} title="The Store" height='80'></img>
                <div class='d-flex justify-content-center'>
                    <div class='w-50 d-flex flex-column align-items-center justify-content-center'>
                         <div>
                            <img src={Corgi} title="You!" class='rounded-circle border border-3 border-dark' height = '150'></img>
                        </div>
                        <h2 class='p-2'>Create an account</h2>
                        <form class='w-50'>
                            <div class = "form-group text-center p-1">
                                <label for="firstN"><b>First Name</b></label>
                                <input class = "text-field form-control" id="firstN" type="text" name="firstN" required/>
                            </div>
                            <div class = "form-group text-center p-1">
                                <label for="lastN"><b>Last Name</b></label>
                                <input class = "form-control text-field" id = "lastN" type="text" name = "lastN" required/>
                            </div>
                            <div class = "form-group text-center p-1">
                                <label for="email"><b>E-mail</b></label>
                                <input class = "form-control text-field" id = "email" type="email" name="email"  required />
                            </div>
                            <div class = "form-group text-center p-1">
                                <label for="password"><b>Password</b></label>
                                <input class = "form-control text-field" id = "password" type="password" name="password"  required />
                            </div>
                            <div class = "form-group text-center p-1">
                                <label for="phnNum"><b>Phone Number</b></label>
                                <input class = "form-control text-field" id='phnNum' type="tel" name="phoneNumber" required />
                            </div>
                            <div class = "form-group text-center p-1">
                                <label for="addy"><b>Address</b></label>
                                <input class = "form-control text-field" id = 'addy' type="text" name="address" required/>
                            </div> 
                            <div class = "form-group text-center p-1">
                                <div><label for='sellerQ'><b>Do you want to be a seller?</b></label></div>
                                <div class='form-check form-check-inline'>
                                    <input type='radio' class='form-check-input' id='radYes' value='radYes' 
                                        checked = {this.state?.selectedOption === 'radYes'}
                                        onChange = {this.handleChange}
                                        />
                                    <label class='form-check-label' for='radYes'>Yes</label>
                                </div>
                                <div class='form-check form-check-inline'>
                                    <input type='radio' class='form-check-input' id='radNo' value='radNo'
                                        checked= {this.state?.selectedOption === 'radNo'}
                                        onChange = {this.handleChange}
                                        />
                                    <label class='form-check-label' for='radNo'>No</label>
                                </div>
                            </div>
                            <div class='d-flex justify-content-center'>
                                <button class='btn btn-light btn-lg rounded-pill m-2 w-25' id="create-btn">
                                    <Link to="/buyerprofile">Create</Link>
                                </button>
                                <button class='btn btn-light  btn-lg rounded-pill m-2 w-25'>
                                    <Link to="/">Cancel</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default BuyerAccountCreation;