import notFound from "../assets/notFound.gif";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <div className="notfound__block">
        <h1 className="notfound__title">Oops!</h1>
        <p className="notfound__subtitle">404 - Page Not Found!</p>
        <img src={notFound} className="notfound__image"/>
        <Button
          className={"button_size_medium"}
          type={"button"}
          text={"Back To GIF"}
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}

export default NotFound;
