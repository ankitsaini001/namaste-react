import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=394784&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1]?.card?.card
      ?.itemCards;
console.log(itemCards);

  return (
    <div className="RestaurantMenu">
      <h1>{name}</h1>
      <p>
        {totalRatingsString} - {costForTwoMessage}
      </p>
      <p>{cuisines.join(", ")}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((item, index) => (
          <li key={index}>
            {item?.card?.info?.name} - ₹{(item?.card?.info?.price || 0) / 100}
          </li>
        ))}
        <li>Briyani</li>
        <li>Aloo Pratha</li>
        <li>Pooha</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
