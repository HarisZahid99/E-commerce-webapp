import React, { useState, useRef, useEffect } from "react";
import "../Styles/App.scss";
import StoreLogo from "../Images/StoreLogo";
import "bootstrap/dist/css/bootstrap.css";
import CartSymbol from "../Images/shopping-bag-line.svg";
import Corgi from "../Images/corgi-wave.png";
import Product from "./Item";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { get_items } from "../requests";

function Home() {
  //Set nav paths
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [dataRendered, setStatus] = useState(0); // 0: no show, 1: show yes
  var items = [];
  var items_length = 0;

  const checkDataRender = (status) => {
    setStatus(status);
  };
  useEffect(() => {
    get_items(null).then((response) => {
      items = JSON.parse(response.data.data);
      setData(items);
      checkDataRender(1);
      items_length = items.length;
      localStorage.setItem("items", data);
    });
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <NavBar />
      <hr></hr>

      <div>
        {dataRendered == 1 && data.map((item) => <Product props={item} />)}
      </div>
    </div>
  );
}

export default Home;
