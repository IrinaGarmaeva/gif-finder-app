import { useState } from "react";
import Spinner from "./Spinner";

// компонент должен получать card, извлекаем card.url
function Card({ card ,onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="card">
      <img
        src={card.images.fixed_width.url}
        className="card__image"
        alt={card.title}
        onClick={handleClick}
      />
    </div>
  );
}

export default Card;
