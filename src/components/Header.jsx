import { useState } from "react";
import { LOGO } from "../Utils/constants";
import { Link } from "react-router-dom";

// Header Section
const Header = () => {
  //useState Hook
  const [btnNameReact, setBtnNameReact] = useState("Sign In");
  return (
    <div className="header">
      <div className="app-logo">
        <img src={LOGO} alt="App Logo" />
      </div>
      <div className="header-menu">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/offer">Offers</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>Sign In</li>
          <li>Cart</li>
          <button
            className="signup-btn"
            onClick={() => {
              // let btnValue = "Sign Up";
              btnNameReact === "Sign In"
                ? setBtnNameReact("Sign Up")
                : setBtnNameReact("Sign In");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
