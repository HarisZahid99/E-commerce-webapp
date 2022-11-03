import logo from './logo.svg';
import './App.css';
import StoreLogo from './StoreLogo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import BuyerProfile from './Components/BuyerProfile';
import SellerProfile from './Components/SellerProfile';
import BuyerAccountCreation from './Components/BuyerAccountCreation'
import SellerAccountCreation from './Components/SellerAccountCreation'

function App() {
  return (
<<<<<<< HEAD
    <SellerAccountCreation/>
=======
    <BrowserRouter>
    <Routes>
          <Route path="/buyerprofile" element={<BuyerProfile />} />
          <Route path="/sellerprofile" element={<SellerProfile />} />
    </Routes>
  </BrowserRouter>
>>>>>>> f39986a0897079ec80e9e2a48d94a364071751c8
  );
    
}

export default App;
