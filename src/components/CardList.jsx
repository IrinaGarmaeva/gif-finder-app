import Card from "./Card";
import Spinner from "./Spinner";

function CardList({ cards, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <section className="card__list" aria-label="card section">
        {cards.map((card) => {
          return <Card key={card.id} card={card} isLoading={isLoading} />;
        })}
      </section>
    );
  }
}

export default CardList;
