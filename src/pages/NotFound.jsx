import notFound from "../assets/notFound.gif";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__block">
        <h1 className="notfound__title">Oops!</h1>
        <p className="notfound__subtitle">404 - Page Not Found!</p>
        <img src={notFound} width="150px" className="notfound__image"/>
        <Link className="notfound__button" to="/">
          Back To GIF
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
