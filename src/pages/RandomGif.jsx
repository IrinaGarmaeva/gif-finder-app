import Button from "../components/Button";
import { api } from "../utils/Api";
import { useState, useEffect } from "react";

function RandomGif({}) {
  const [gif, setGif] = useState(null);

  const fetchGif = () => {
    api
      .getRandomGifs()
      .then((data) => {
        setGif(data.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    return fetchGif;
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="random">
      {gif && <img src={gif.images.fixed_width.url} alt={gif.title} className="random__image" />}
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
