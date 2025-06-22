import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();

  // Custom hook to fetch menu data
  const resInfo = useRestaurantMenu(id);

  if (!resInfo) return <Shimmer />;

  // Extract restaurant info
  const { name, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // Filter only ItemCategory type cards
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log("categories: ", categories);

  return (
    <div className="menu-container">
      <div className="restaurant-info">
        <h1>{name}</h1>
        <p>
          {totalRatingsString} • {costForTwoMessage}
        </p>
        <p>{cuisines?.join(", ")}</p>
      </div>

      {/* Render each category section */}
{
  categories.map((category) => {
    return <RestaurantCategory 
     key={category?.card?.card?.title}
    data={category?.card?.card} />;
  })
}
    </div>
  );
};

export default RestaurantMenu;
