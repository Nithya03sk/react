import { CDN_URL } from "../utility/constant";

const Restocard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating} = resData?.info;
    return (
        <div className="resto-card">
            <img alt = "card" src={CDN_URL+resData.info.cloudinaryImageId}></img>
            <h4>{name}</h4>
            <h5>{cuisines.join(', ')}</h5>
            <h3>{avgRating}</h3>
        </div>
    );
}
export default Restocard;