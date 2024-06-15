import { useEffect, useState } from "react";
import menuData from "../utils/menuMockData";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(menuData);

  const {resId} = useParams();

  console.log('restaurantId : ',resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const restaurantId=442043
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4082653&lng=76.97870759999999&restaurantId=442043&catalog_qa=undefined&query=kebab&submitAction=ENTER"
    // );
    // const json = await data.json();
    //const json = menuData;
    // console.log("menu data ", json);
    setResInfo(menuData);
  };
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
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."} {item.card.info.price / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>
            <li>{itemCards[2].card.info.name}</li>
            <li>{itemCards[3].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
