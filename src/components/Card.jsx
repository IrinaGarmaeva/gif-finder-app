<<<<<<< HEAD
import Spinner from "./Spinner";

=======
>>>>>>> 93c45213076cff43be4e9bcb029f453406272fc0
function Card({ card }) {
  return (
    <div className="card">
      <img
        src={card.images.fixed_width.url}
        className="card__image"
        alt={card.title}
      />
    </div>
  );
}

export default Card;
