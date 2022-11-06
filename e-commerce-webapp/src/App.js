import './Styles/App.scss';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Profile from './Components/Profile'


function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
     
    </Routes>
  </BrowserRouter>
  );
    
}

export default App;
