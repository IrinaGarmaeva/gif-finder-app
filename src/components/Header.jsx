import logo from "../assets/logo.gif";
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
      <nav className="navbar">
        <ul className="nav">
          <li
            className={`nav__item ${
              pathMatchRoute("/") ? "nav__item_active" : ""
            }`}
            onClick={() => navigate("/")}
          >
            Поиск
          </li>
          <li
            className={`nav__item ${
              pathMatchRoute("/trends") ? "nav__item_active" : ""
            }`}
            onClick={() => navigate("/trends")}
          >
            Тренды
          </li>
          <li
            className={`nav__item ${
              pathMatchRoute("/random-gif") ? "nav__item_active" : ""
            }`}
            onClick={() => navigate("/random-gif")}
          >
            Случайная гиф
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
