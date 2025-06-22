import { CDN_URL } from "../Utils/constants";

// Restaurant Card
// props is an object
//{resName, cuisins,rating,delivery} => Passing props this way is a destructuring on a fly
const RestoCard = ({ resName }) => {
    const { name, cuisines, avgRating, cloudinaryImageId, sla } = resName?.info;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="restaurant-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="res-content">
          <h3 className="restroname">{name}</h3>
          <p className="cuisines">{cuisines.join(", ")}</p>
          <div className="rating-time">
            <span>{avgRating} ⭐</span> • <span>{sla.slaString}</span>
          </div>
        </div>
      </div>
    );
  };

  // Higher Order Component
  // Which will take this RestroCard as input and output a new component

  export const iswithOpenStatus = (RestoCard) => {
    return (props) => {
      return (
        <div className="relative">
          {
            props ? <label className="absolute top-[0.2rem] left-[0.1rem] bg-white z-30">🟢</label> : <label className="absolute top-[0.2rem] left-[0.1rem] bg-white z-30">🔴</label>
          }
          <RestoCard  {...props} />
        </div>
      )
    }
  }

  export default RestoCard;