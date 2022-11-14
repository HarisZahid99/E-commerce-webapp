import React, { Component } from "react";
import NavBar from "./NavBar";
import Shoes from "../Images/Shoes.jpg";
import Laptop from "../Images/Laptop.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        item: "Shoes",
        price: 5,
        quantity: 1,
        description:
          "Black white and red air jordan 1s",
      },
      {
        id: 2,
        item: "Laptop",
        price: 300,
        quantity: 1,
        description: "Mac book pro",
      },
      {
        id: 3,
        item: "Laptop",
        price: 300,
        quantity: 2,
        description: "Mac",
      },
      {
        id: 4,
        item: "Laptop",
        price: 300,
        quantity: 3,
        description: "Mac",
      },
      {
        id: 5,
        item: "Laptop",
        price: 300,
        quantity: 2,
        description: "DELL XPS",
      },
    ],
  };

  dict = {
    Shoes: Shoes,
    Laptop: Laptop,
  };

    Checkout = () => {
        console.log("Checkout");
    }
    
  getSubtotal = () => {
    let list = this.state.products;
    let price = 0;
    list.forEach((item) => {
      price += item.quantity * item.price;
    });
    return price.toFixed(2);
  };

  getTax = () => {
    let price = this.getSubtotal();
    return (price * 1.13 - price).toFixed(2);
  };
  getTot = () => {
    let price = this.getSubtotal();
    let tax = this.getTax();
    return parseFloat(price) + parseFloat(tax);
  };

  Decrement = (quan, num) => {
    if (quan !== 0) {
      let list = this.state.products;
      list[num - 1].quantity -= 1;
      this.setState({ products: list });
    }
  };

  Increment = (num) => {
    let list = this.state.products;
    list[num - 1].quantity += 1;
    this.setState({ products: list });
  };

  RenderItemList = () => {
    return this.state.products.map((product) => (
      <div className="col-md-3">
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={this.dict[product.item]} />
          <Card.Body>
            <Card.Title>{product.item}</Card.Title>
            <Card.Text>$ {product.price}</Card.Text>
            <Card.Text>Quantity: {product.quantity}</Card.Text>
            <Card.Text>Description: {product.description}</Card.Text>
            <span>
              <Button
                variant="success"
                onClick={() => this.Increment(product.id)}
              >
                +
              </Button>
            </span>
            <span>
              <Button
                variant="danger"
                onClick={() => this.Decrement(product.quantity, product.id)}
                disabled={product.quantity === 0}
              >
                -
              </Button>
            </span>
          </Card.Body>
        </Card>
      </div>
    ));
  };

  render() {
    if (this.state.products.length === 0) {
      return (
        <div>
          <div style={{ height: "25vh" }}>
            <NavBar />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <h1>Add Items to Cart</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ height: "25vh" }}>
            <NavBar />
          </div>
          <div className="container">
            <React.Fragment>
              <span>{this.RenderItemList()}</span>
              <span className="position-absolute top-50 start-50">
                <h1>Order Summary</h1>
                <h2>Subtotal: $ {this.getSubtotal()}</h2>
                          <h2>Tax: $ {this.getTax()}</h2>
                          <h2>Shipping: Free</h2>
                          <h2>Total: $ {this.getTot()}</h2>
                          <Button onClick={()=>this.Checkout() } disabled={parseFloat(this.getSubtotal())=== 0 } variant = "secondary">Checkout</Button>
              </span>
            </React.Fragment>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
