import './Styles/App.scss';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
<<<<<<< HEAD
import BuyerProfile from './Components/BuyerProfile';
import SellerProfile from './Components/SellerProfile';
import BuyerAccountCreation from './Components/BuyerAccountCreation'
import SellerAccountCreation from './Components/SellerAccountCreation'
import HomepageLogin from './Components/HomepageLogin'
=======
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Cart from './Components/Cart'
>>>>>>> main


function App() {
  return (
    <BrowserRouter>
    <Routes>
<<<<<<< HEAD
          <Route index element={<HomepageLogin />} />
          <Route path="/buyerprofile" element={<BuyerProfile />} />
          <Route path="/sellerprofile" element={<SellerProfile />} />
          <Route path="/buyerprofilecreation" element={<BuyerAccountCreation />} />
=======
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
     
>>>>>>> main
    </Routes>
  </BrowserRouter>
  );
    
}

export default App;
