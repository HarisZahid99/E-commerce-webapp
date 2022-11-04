import React, { Component } from "react";
import StoreLogo from "../StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import Corgi from "../corgi-wave.png";
import Corgiwave from "../Corgi copy.png";


class SellerAccountCreation extends Component{

    state = {
        selectedOption: 'radYes'
    }

    // constructor(){
    //     super();
    //     //this.state = this.getInitialState;
    // }

    getInitialState(){
        return {
            selectedOption: 'radYes'
        }
    } 

    handleChange(event) {
        // this.setState({
        //     selectedOption: event.target.value
        // });
        console.log(event.target.value);
        this.state.selectedOption = event.target.value;
    }
    render(){
        return(
            <div>
                <img src={StoreLogo} title="The Store" height='80'></img>
                <div class='d-flex justify-content-center'>
                    <div class='w-50 d-flex flex-column align-items-center justify-content-center'>
                         <div>
                            <img src={Corgiwave} title="You!" class='rounded-circle border border-3 border-dark' height = '150'></img>
                        </div>
                        <h2 class='p-2'>Create a seller account</h2>
                        <form class='w-50'>
                            <div class = "form-group text-center p-1">
                                <label for="firstN"><b>Store Name</b></label>
                                <input class = "form-control" id="firstN" type="text" name="firstN" required/>
                            </div>
                            <div class = "form-group text-center p-1">
                                <label for="email"><b>E-mail</b></label>
                                <input class = "form-control" id = "email" type="email" name="email"  required />
                            </div>
                            <div class = "form-group text-center p-1">
                                <label for="password"><b>Password</b></label>
                                <input class = "form-control text-field" id = "password" type="password" name="password"  required />
                            </div>
                            <div class = "form-group text-center p-1">
                                <label for="phnNum"><b>Phone Number</b></label>
                                <input class = "form-control" id='phnNum' type="tel" name="phoneNumber" required />
                            </div>
                            <div class = "form-group text-center p-1">
                                <label for="addy"><b>Address</b></label>
                                <input class = "form-control" id = 'addy' type="text" name="address" required/>
                            </div> 
                            <div class='d-flex justify-content-center'>
                                <button class='btn btn-primary btn-lg rounded-pill m-2 w-25' id="create-btn">Create</button>
                                <button class='btn btn-secondary btn-lg rounded-pill m-2 w-25'>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SellerAccountCreation;