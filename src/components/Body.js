import ResaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local state variable- super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(restList[0].data.cards.map(card => card.card.card.info));
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(res => {
              console.log("Filtering restaurant:", res);
              return res.avgRating > 4;
          });
            console.log("after filteredList is : ",filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* ResaurantCard */}
        {console.log(listOfRestaurant)}
        {/* <ResaurantCard resData={restList[0].data.cards[0].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[1].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[2].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[3].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[4].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[5].card.card}/>
          <ResaurantCard resData={restList[0].data.cards[6].card.card}/> */}
        {listOfRestaurant && listOfRestaurant.length > 0 ? (
          listOfRestaurant.map((restaurant, index) =>{
            console.log("restaurant hhhhh ",restaurant);
           return <ResaurantCard
            key={`${index}}`}
            resData={restaurant}
          />
          }
             
          )
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Body;
