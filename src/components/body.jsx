import Restocard from "./Restocard";
import resObj from "../utility/mockData";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfResto, setListofResto] = useState(resObj);

    useEffect( () => {
      getRestaurant()
    },[]);

    async function getRestaurant(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9750721&lng=77.665865&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsonData = await data.json();
      console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
      setListofResto(jsonData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
      // setListofResto(jsonData?.data?.cards)
    }

    const filter = () => {
        const filteredList = listOfResto.filter( (rest) => rest.info.avgRating > 4.3 );
        setListofResto(filteredList);
    }

    return (
      <div className="body">
        <div className="filter">
          <button onClick={ () => {filter()} }>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfResto.map((rest) => (
            <Restocard key={rest.info.id} resData={rest} />
          ))}
        </div>
      </div>
    );
}

export default Body;