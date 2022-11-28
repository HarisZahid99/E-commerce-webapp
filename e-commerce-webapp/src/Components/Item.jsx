import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Shoes from "../Images/Shoes.jpg";
import Laptop from "../Images/Laptop.jpg";
class Item extends Component {
    state = { product: this.props.Item };
    dict = {
        "Shoes": Shoes,
        "Laptop": Laptop
    };

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src={this.dict[this.state.product.item]} />
          <Card.Body>
            <Card.Title>{this.state.product.item}</Card.Title>
                    <Card.Text>{this.state.product.price}</Card.Text>
                    <Card.Text>Quantily 1</Card.Text>
                    <Card.Text>{this.state.product.discription}</Card.Text>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
            <Button variant="primary">View Item</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Item;
