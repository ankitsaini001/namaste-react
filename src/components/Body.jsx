import Shimmer from "../Shimmer";
import RestoCard from "./RestoCard";
// import resList from "../Utils/Mockdata";
import { useEffect, useState } from "react";

// Body Section
const Body = () => {
  // Initialize directly with resList (don't wrap it inside {})
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaining
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //    return <Shimmer />
  // }

  const handleClick = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => parseFloat(res.info.avgRating) > 4
    );
    setListOfRestaurants(filteredList);
    console.log(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input type="text" className="search-box" placeholder="search..."/>
      </div>
      <div className="filter-search">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants &&
          listOfRestaurants.map((restaurant) => (
            <RestoCard key={restaurant.info.id} resName={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
