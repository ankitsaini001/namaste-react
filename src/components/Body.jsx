import RestoCard from "./RestoCard";
import resList from "../Utils/Mockdata";
import { useState } from "react";

// Body Section
const Body = () => {
  // Initialize directly with resList (don't wrap it inside {})
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const handleClick = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => parseFloat(res.info.avgRating) > 4
    );
    setListOfRestaurants(filteredList);
    console.log(filteredList);
  };

  return (
    <div className="body">
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
