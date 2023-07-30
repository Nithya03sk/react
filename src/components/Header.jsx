import { LOGO_URL } from "../utility/constant";

const Header = () => {
    return (
        <div className="header">
            <img className = "logo" alt= "food" src={LOGO_URL}></img>
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}
export default Header;