import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../Utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(Menu_API + id);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu-container">
      <div className="restaurant-info">
        <h1>{name}</h1>
        <p>{totalRatingsString} • {costForTwoMessage}</p>
        <p>{cuisines?.join(", ")}</p>
      </div>

      <h2 className="menu-title">Recommended</h2>

      <div className="menu-list">
        {itemCards.map((item) => {
          const info = item?.card?.info;
          return (
            <div key={info?.id} className="menu-card">
              {/* Left - Info */}
              <div className="menu-details">
                <h3>{info?.name}</h3>
                <p className="price">₹{(info?.price || info?.defaultPrice || 0) / 100}</p>
                {info?.description && (
                  <p className="description">
                    {info.description.length > 130
                      ? info.description.slice(0, 130) + "..."
                      : info.description}
                  </p>
                )}
              </div>

              {/* Right - Image & Button */}
              {info?.imageId && (
                <div className="menu-image-container">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                    alt={info.name}
                    className="menu-image"
                  />
                  {/* <button className="add-button">ADD</button> */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
