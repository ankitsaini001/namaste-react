//Hook is a normal Javascript Function
import { useEffect, useState } from "react";
import { Menu_API } from "../Utils/constants";
const useRestaurantMenu = (id) => {
  // fetch data
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []); // We want to fetch the data onl once, so we are using empty array.

  const fetchMenu = async () => {
    try {
      const data = await fetch(Menu_API + id);
      const json = await data.json();
      console.log(json);
      
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
