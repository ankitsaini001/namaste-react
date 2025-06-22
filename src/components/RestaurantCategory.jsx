import { useState } from "react";
import RestaurantItemList from "./RestaurantItemlist";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  return (
    <div className="w-xl">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={() => setShowItems(!showItems)}
      >
        <span className="text-[17px] font-extrabold text-[#282c3f]">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`text-lg text-[#3e4152] transform transition-transform duration-200 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {/* Light Grey Bottom Bar */}
      <div className="w-full h-[10px] bg-[#f0f0f5] rounded-sm mb-1"></div>

      {/* Item List */}
      {showItems && (
        <div className="pt-1">
          <RestaurantItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
