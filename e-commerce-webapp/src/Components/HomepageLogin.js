import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import StoreLogo from "../logo-s1.png";
import './HomepageLogin.scss'

class HomepageLogin extends Component{

    dict = {
        "StoreLogo": StoreLogo
    };

    render(){
        return(
            <div>
                
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div class="lineOne">
                    <div class="logo"><img src={StoreLogo} title="The Store" height='80'></img></div>
                    <div class="content">
                        <h1>The Store.</h1>
                        <div class = "field">

                                <h2>Login</h2>

                                <label for="firstN"><span>Username</span></label>
                                <input class = "text-field form-control" id="UserN" type="text" name="UserN" required/>
                                <label for="firstN"><span>Password</span></label>
                                <input class = "text-field form-control" id="PassW" type="password" name="PassW" required/>
                                <div class = "buttons">
                                    <button class="btn btn-primary m-2">Login</button>
                                    <button class="btn btn-primary m-2">Sign Up</button>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }


}
export default HomepageLogin;