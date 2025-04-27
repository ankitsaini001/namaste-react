import { LOGO } from "../Utils/constants";

// Header Section
const Header = () => {
    return (
      <div className="header">
        <div className="app-logo">
          <img
            src={LOGO}
            alt="App Logo"
          />
        </div>
        <div className="header-menu">
          <ul className="nav-items">
            <li>Home</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Sign In</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;