import './Styles/App.scss';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import BuyerProfile from './Components/BuyerProfile';
import SellerProfile from './Components/SellerProfile';
import BuyerAccountCreation from './Components/BuyerAccountCreation'
import SellerAccountCreation from './Components/SellerAccountCreation'

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/buyerprofile" element={<BuyerProfile />} />
          <Route path="/sellerprofile" element={<SellerProfile />} />
    </Routes>
  </BrowserRouter>
  );
    
}

export default App;
