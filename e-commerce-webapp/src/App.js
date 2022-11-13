import './Styles/App.scss';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Cart from './Components/Cart'
import ItemPage from './Components/ItemPage'


function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item" element={<ItemPage />} />
     
    </Routes>
  </BrowserRouter>
  );
    
}

export default App;
