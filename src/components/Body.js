import ResaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local state variable- super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(
    restList[0].data.cards.map((card) => card.card.card.info)
  );
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(ResaurantCard);

  useEffect(() => {
    //if we want to do some operation after rendering the component we should use this
    console.log("useEffect call back funtion called");
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4082653&lng=76.97870759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); // fetch is given to us by browser js engine.it will return a promise we can resolve using .then and ...
    // const json = await data.json();
    // console.log("Swiggy API: ",json);
    setFilteredRestaurant(listOfRestaurant);
  };

  // useEffect (callbackfunction, dependency array);
  console.log("useEffect call after body rendered");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black focus"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restaurant cards and update the UI.
              console.log("searchText is:", searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) => {
                console.log("39999 ", res);
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log("searchText is:", searchText);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) => {
                console.log("Filtering restaurant:", res);
                return res.avgRating > 4;
              });
              console.log("after filteredList is : ", filteredList);
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* ResaurantCard */}
        {console.log('HOF:  ', filteredRestaurant)}
        {/* <ResaurantCard resData={restList[0].data.cards[0].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[1].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[2].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[3].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[4].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[5].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[6].card.card}/> */}
        {filteredRestaurant && filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant, index) => {
            console.log("restaurant hhhhh ", restaurant);
            return (
              <Link key={`${index}}`} to={"/restaurants/" + restaurant.id}>
                {restaurant.promoted ? (
                  <RestaurantCardPromoted resData={restaurant}/>
                ) : (
                  <ResaurantCard resData={restaurant} />
                )}
              </Link>
            );
          })
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Body;
