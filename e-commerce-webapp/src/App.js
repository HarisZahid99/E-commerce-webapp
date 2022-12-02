import './Styles/App.scss';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Cart from './Components/Cart'
import InventoryManagement from './Components/InventoryManagement'
import OrderHistory from './Components/OrderHistory'

import Checkout from './Components/Checkout';


function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/inventorymanagement" element={<InventoryManagement />} />
          <Route path="/orderhistory" element={<OrderHistory />} /> 
          <Route path="/checkout" element={<Checkout />} />   
    </Routes>
  </BrowserRouter>
  );
    
}

export default App;
