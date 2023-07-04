// import logo from "../assets/logo.gif";
import logo from "../assets/logoSlogan-removebg-preview.png";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="header">
      <img src={logo} className="header__logo" />
      <ul className="header-nav">
        <li
          className={`header-nav__item ${
            pathMatchRoute("/") ? "header-nav__item_active" : ""
          }`}
          onClick={() => navigate("/")}
        >
          Search
        </li>
        <li
          className={`header-nav__item ${
            pathMatchRoute("/trends") ? "header-nav__item_active" : ""
          }`}
          onClick={() => navigate("/trends")}
        >
          Trending
        </li>
        <li
          className={`header-nav__item ${
            pathMatchRoute("/random-gif") ? "header-nav__item_active" : ""
          }`}
          onClick={() => navigate("/random-gif")}
        >
          Random Gif
        </li>
      </ul>
    </div>
  );
}

export default Header;
