import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Shoes from "../../Shoes.jpg";
import Laptop from "../../Laptop.jpg";
class Product extends Component {
    state = { product: this.props.product };
    dict = {
        "Shoes": Shoes,
        "Laptop": Laptop
    };

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.dict[this.state.product.item]} />
          <Card.Body>
            <Card.Title>{this.state.product.item}</Card.Title>
                    <Card.Text>{this.state.product.price}</Card.Text>
                    <Card.Text>Quantily 1</Card.Text>
                    <Card.Text>{this.state.product.discription}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Product;
