import Restocard from "./Restocard";
import resObj from "../utility/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfResto, setListofResto] = useState(resObj);

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