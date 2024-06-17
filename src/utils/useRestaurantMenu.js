import { useEffect, useState } from "react";
import menuData from "./menuMockData";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(menuData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(MENU_API + resId);
    // const json = data.json();
   // setResInfo(json.data);
    setResInfo(menuData);
  };

  return resInfo;
};

export default useRestaurantMenu;
