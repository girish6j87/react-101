import { useEffect, useState } from "react";
import menuData from "../utils/menuMockData";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  console.log("resInfo ", resInfo);
  if (resInfo === null) return <h1>Develop Shimmer UI</h1>;
  const { name, cuisines, costForTwoMessage } =
    resInfo[0].data.cards[2].card.card.info;
  const { itemCards } =
    resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
      ?.card?.card;
  console.log("check itemcards : ", itemCards);
  console.log(
    "IS THIS EMPTY ",
    resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
      ?.card?.card?.itemCards[0]?.card?.info
  );
  console.log(
    "IS THIS EMPTY 1111 ",
    resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
  );

  const categories =
    resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(
    "cccc : ",
    resInfo[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        console.log("HHHh ", c.card?.card?.["@type"]);
        if (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          console.log("iiififififif ");
          return;
        }
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      }
    )
  );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* Categories / accordians */}
      {categories.map((category, index) => (
        //Controlled Components
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex = {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
