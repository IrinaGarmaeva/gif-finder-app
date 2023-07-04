import Button from "../components/Button";
import Spinner from "../components/Spinner";
import { useEffect } from "react";

function RandomGif({isLoading, gifSingle, getRandomGif}) {

  useEffect(() => {
    return getRandomGif;
  }, []);

  const handleClick = () => {
    getRandomGif();
  };


  return (
    <div className="random">
      {isLoading ? <Spinner /> : <img src={gifSingle.images.fixed_width.url} alt={gifSingle.title} className="random__image" />}
      <Button
        className="button_size_medium"
        type="button"
        onClick={handleClick}
        text={"More GIF"}
      />
    </div>
  );
}

export default RandomGif;
