import React, { Component } from "react";
import "../App.css";
import StoreLogo from "../StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import Corgi from "../images/Corgi.webp";
import Item from "./product/Item";
import Cat from "../images/Kitty";

class BuyerProfile extends Component {
  Name = React.createRef();
  Email = React.createRef();
  Phone = React.createRef();
  Addrress = React.createRef();

  state = {
    isToggled: true,
    user: {
      email: "tmu@gmail.com",
      name: "Ransika",
      phone: "416",
      address: "3345 Road",
      ads: "yes",
    },
    products: [
      { id: 1, item: "Shoes", price: "$5" },
      { id: 2, item: "Laptop", price: "$300" },
      { id: 3, item: "Laptop", price: "$300" },
      { id: 4, item: "Laptop", price: "$300" },
      { id: 5, item: "Laptop", price: "$300" },
    ],
    emailOpt: "no",
    userType:"Buyer"
  };

  EditPage = () => {
    this.setState({ isToggled: false });
  };

  handleEmails = (event) => {

    this.setState({ emailOpt: event.target.value });
  }
  ChangePage = () => {
    let ads = this.state.user.ads;
    this.setState({ isToggled: true,emailOpt:ads });
  };

  HomePage = () => {
    console.log("Go Home");
  };
  SubmitChanges = () => {
    let updateUser = {
      email: this.Email.current.value,
      name: this.Name.current.value,
      phone: this.Phone.current.value,
      address: this.Addrress.current.value,
      ads: this.state.emailOpt,
    };
    this.setState({ isToggled: true, user: updateUser });
  };

  renderButtons() {
    if (this.state.isToggled === true) {
      return (
        <form>
          <div>
            <button class="btn btn-primary pr-50" onClick={this.EditPage}>
              Edit Profile
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="Name">{this.state.userType === "Buyer" ? "Name" : "Store Name"}</label>
            <input
              ref={this.Name}
              id="Name"
              defaultValue={this.state.user.name}
              onChange={(e) => {
                this.setState({ value: e.target.value });
              }}
              disabled={this.state.isToggled}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              ref={this.Email}
              id="Email"
              type="text"
              defaultValue={this.state.user.email}
              disabled={this.state.isToggled}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Phone">Phone Number</label>
            <input
              ref={this.Phone}
              id="Phone"
              type="text"
              defaultValue={this.state.user.phone}
              disabled={this.state.isToggled}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Address">Addrress</label>
            <input
              ref={this.Addrress}
              id="Addrress"
              type="text"
              defaultValue={this.state.user.address}
              disabled={this.state.isToggled}
              className="form-control"
            />
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <button class="btn btn-primary m-2" onClick={this.SubmitChanges}>
            Save
          </button>
          <button class="btn btn-primary m-2" onClick={this.ChangePage}>
            Cancel
          </button>
          <form>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                ref={this.Name}
                id="Name"
                defaultValue={this.state.user.name}
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                }}
                disabled={this.state.isToggled}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                ref={this.Email}
                id="Email"
                type="text"
                defaultValue={this.state.user.email}
                disabled={this.state.isToggled}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone Number</label>
              <input
                ref={this.Phone}
                id="Phone"
                type="text"
                defaultValue={this.state.user.phone}
                disabled={this.state.isToggled}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Address">Addrress</label>
              <input
                ref={this.Addrress}
                id="Addrress"
                type="text"
                defaultValue={this.state.user.address}
                disabled={this.state.isToggled}
                className="form-control"
              />
            </div>
          </form>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <img src={StoreLogo} className="App-logo m-2" alt="logo" />
          <button style={{ float: "right" }} onClick={this.HomePage}>
            <img
              src={this.state.userType==="Buyer"? Corgi:Cat}
              style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
              className="App-logo m-2 row"
              alt="logo"
            />
          </button>
          <div className="row">
            <div className="col">
              <img
                src={this.state.userType==="Buyer"? Corgi:Cat}
                style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                className="App-logo m-2 row"
                alt="logo"
              />
            </div>
            <label htmlFor="Name" style={{ fontWeight: "bold" }}>
              {this.state.user.name}
            </label>
            <label htmlFor="User">{ this.state.userType==="Buyer"? "Buyer":"Seller"}</label>
          </div>
          <div className="productsContainer">{this.renderButtons()}</div>

 <form>
          
          <strong>Opt into Emails?:</strong>
          <label> 
              <input
                disabled={ this.state.isToggled}
              type="radio"
                value="yes"
                checked={ this.state.emailOpt==="yes"}
              onChange={this.handleEmails}
            />Yes
          </label>
          <label> 
              <input
                disabled={ this.state.isToggled}
              type="radio"
                value="no"
                checked={ this.state.emailOpt==="no"}
              onChange={this.handleEmails}
            />No
          </label>
        </form>

  
         
          

          <label htmlFor="Name" style={{ fontWeight: "bold" }}>
            {this.state.userType==="Buyer"? "Order History":"Inventory Management"}
          </label>
          <div className="row">
            {this.state.products.map((product) => (
              <div className="col-md-3">
                <Item product={product} />
              </div>
            ))}
          </div>
        </div>

   
      </div>
    );
  }
}

export default BuyerProfile;
