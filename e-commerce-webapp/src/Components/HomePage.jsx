import React, { Component } from "react";
import StoreLogo from "../StoreLogo";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import clothing from "../clothing.jpg";
import games from "../games.jpg";
import electronics from "../electronics.jpg"; 
import {Navigation} from 'react-router';

class HomePage extends Component {
  state = {
      signedIn: false,
      user: {
          
      },
      itemHistory: [
          { id: 1, item: "Shoes", tag: "clothing", price: "$5" },
        { id: 3, item: "Sweater", tag: "clothing", price: "$300" },
          { id: 4, item: "Beanie", tag: "clothing", price: "$300" },
      { id: 5, item: "Pokemon Scarlet and Violet", tag: "games", price: "$300" }
      ],
      availableItems: [
      { id: 1, item: "Shoes",tag: "clothing", price: "$5" },
      { id: 2, item: "Laptop",tag: "electronics", price: "$300" },
      { id: 3, item: "Sweater", tag: "clothing", price: "$300" },
      { id: 4, item: "Beanie", tag: "clothing",price: "$300" },
          { id: 5, item: "Crash Bandicoot N-Sane Trilogy", tag: "games", price: "$300" },
      { id: 3, item: "Socks", tag: "clothing", price: "$20" },
      ],



    };
    dict = {
        "electronics": electronics,
        "games": games,
        "clothing":clothing
    }

  renderItemList = () => {

        let recomProduct = [];
        for (var j = 0; j < this.state.itemHistory.length; j++){
            if (!recomProduct.includes(this.state.itemHistory[j].tag)) {
                recomProduct.push(this.state.itemHistory[j].tag);

            }
        }
        let recommendation = this.state.availableItems.filter(item => recomProduct.includes(item.tag));
        let length = recommendation.length;
        if (length > 4) {
            recommendation = recommendation.slice(0,4);
        }
        return (
            <div className="row" style={{  paddingLeft: "40px",paddingTop: "20px" }}>
             <h5 style={{ textAlign: "Left", paddingTop: "40px" }}>Recommendations:</h5>   
            
                {recommendation.map((product) => (
                    <div className="col-md-3">
                        <Card style={{ width: "15rem",height:"22rem" }}>
                            <Card.Img variant="top" src={this.dict[product.tag]} />
                            <Card.Body>
                                <Card.Title>{product.item}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
             </div>
        )
    };
    
  handleLogout = e => {
    console.log("Logout");
    }
  renderButtons = () => {
    return <button style={{ float: "right" }} className="btn btn-danger m-2" onClick={ this.handleLogout}>Sign Out</button>;
  };

  render() {
    return (
      <div style={{backgroundColor:'grey',height: '100vh'}}>
        <div className="container" >
          <img src={StoreLogo} className="App-logo m-2" alt="logo" />
          {this.renderButtons()}
        </div>
        <h1
          style={{ textAlign: "Center", paddingTop: "100px", color:'#0d0455',fontSize: "5rem" }}
        >
          Welcome to The Store
            </h1>
            
            { this.renderItemList()}
      </div>
    );
  }
}

export default HomePage;
