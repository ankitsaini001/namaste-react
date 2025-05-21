import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../Utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_API+id);  //456986
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="RestaurantMenu">
      <h1>{name}</h1>
      <p>
        {totalRatingsString} - {costForTwoMessage}
      </p>
      <p>{cuisines.join(", ")}</p>
      <h3>Recommanded</h3>
      <ul>
        {itemCards.map((item, index) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - ₹{(item?.card?.info?.price ||  item?.card?.info?.defaultPrice || 0) / 100}
          </li>
        ))}
      </ul>
      {/* <div>
        <h3>Main Course</h3>
      <ul>
        {itemCards.map((item, index) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - ₹{(item?.card?.info?.price ||  item?.card?.info?.defaultPrice || 0) / 100}
          </li>
        ))}
      </ul>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
