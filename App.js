import React from "react";
import ReactDOM from "react-dom/client";

// Header Section Container
const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
          alt="App Logo"
        />
      </div>
      <div className="header-menu">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Restaurant Card
const RestoCard = () => {
  return (
    <div className="res-card">
        <img
        className="res-logo"
        alt="res-logo" 
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl "/>
      <h3>Meghana Foods</h3>
      <p>Briyani, North Indian, Asian</p>
      <p>4.4star</p>
      <p>38 minutes</p>
    </div>
  );
};

// Body Section
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
      </div>
    </div>
  );
};

// App Container
const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Body /> 
      </div>
    );
  };
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
