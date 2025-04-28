import { useState } from "react";
import { LOGO } from "../Utils/constants";

// Header Section
const Header = () => {
  //useState Hook
  const[btnNameReact, setBtnNameReact] = useState('Sign In');
  return (
    <div className="header">
      <div className="app-logo">
        <img src={LOGO} alt="App Logo" />
      </div>
      <div className="header-menu">
        <ul className="nav-items">
          <li>Home</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
          <button className="signup-btn" onClick={()=>{
           // let btnValue = "Sign Up";
           btnNameReact === "Sign In" ? setBtnNameReact('Sign Up') : setBtnNameReact('Sign In');
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
