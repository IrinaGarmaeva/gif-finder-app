import { useState } from "react";
import Spinner from "./Spinner";


// компонент должен получать card, извлекаем card.url
function Card({card}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="card">
      <img src={card.images.fixed_width.url} className="card__image"
      alt={card.title}/>
      {/* <h3 className="card__title">{card.title}</h3> */}
    </div>
  )
}

export default Card
