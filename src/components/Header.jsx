import { useContext, useState } from "react";
import { LOGO } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

// Header Section
const Header = () => {
  //useState Hook
  const [btnNameReact, setBtnNameReact] = useState("Sign In");
  const userStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //  console.log(loggedInUser);

  // Selector is a hook. Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="app-logo">
        <img src={LOGO} alt="App Logo" />
      </div>
      <div className="header-menu">
        <ul className="nav-items">
          <li>Online Status: {userStatus ? "🟢" : "🔴"}</li>
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
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>Sign In</li>
          <li className="relative font-bold">
            <Link to="/cart" className="relative inline-block">
              <FaShoppingCart className="text-xl" />

              {/* Badge */}
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-base font-semibold px-1.5 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <li className="text-black">{loggedInUser}</li>
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
