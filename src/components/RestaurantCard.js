import { CDN_URL } from "../utils/constants";

const ResaurantCard = (props) => {
  const { resData } = props;
  console.log("check props data",props);
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;
  // console.log(resData.info.name);
  // console.log(resData.info.cuisines.join(", "));
  // console.log(resData.info.avgRating);
  // console.log(resData.info);
  // console.log(resData.info);
  // or
  // const{resName, cuisine} = props;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default ResaurantCard;
