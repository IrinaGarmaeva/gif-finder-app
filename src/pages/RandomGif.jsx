import Button from "../components/Button";
import { api } from "../utils/Api";
import React from "react";
import { useEffect } from "react";

// получает карточку, изменить  alt на имя или альт картинки с апи
function RandomGif({}) {
  const [gif, setGif] = React.useState(null);

  const fetchGif = () => {
    api
      .getRandomGifs()
      .then((data) => {
        setGif(data.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="random">
      {gif && <img src={gif.images.fixed_width.url} alt={gif.title} className="random__image" />}
      <Button
        className="random__button"
        type="button"
        onClick={handleClick}
        text={"Еще GIF"}
      />
    </div>
  );
}

export default RandomGif;
