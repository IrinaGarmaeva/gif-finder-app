import Spinner from "./Spinner";

function Card({card}) {

  return (
    <div className="card">
      <img src={card.images.fixed_width.url} className="card__image"
      alt={card.title}/>
    </div>
  )
}

export default Card
