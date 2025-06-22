import { CDN_URL } from "../Utils/constants";

const RestaurantItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 mb-8 border-b border-gray-300 flex justify-between items-start "
        >
          {/* Left: Textual Info */}
          <div className="w-9/12 pr-4">
            <h3 className="text-base font-medium text-gray-800 mb-1">
              {item.card.info.name}
            </h3>
            <span className="text-sm font-bold block mb-2">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-shadow-2xs text-gray-600">{item.card.info.description}</p>
          </div>

          {/* Right: Image & Button */}
          <div className="w-3/12 flex flex-col items-center space-y-2">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-24 h-24 object-cover rounded-md"
              />
            )}
            <button className="px-4 py-1 text-sm font-semibold bg-white border border-gray-300 rounded-md shadow hover:bg-gray-100 transition">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantItemList;
