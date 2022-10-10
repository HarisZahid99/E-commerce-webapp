import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Product extends Component {
    state = { product:this.props.product } 
    render() { 
        return (
            <div>

            
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
                        <Card.Title>{ this.state.product.item}</Card.Title>
                        <Card.Text>
                            { this.state.product.price}
        </Card.Text>
        <Button variant="primary">View Item</Button>
      </Card.Body>
                </Card>
                </div>
        );
    }
}
 
export default Product;