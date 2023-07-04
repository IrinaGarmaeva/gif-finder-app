import Card from "./Card";
import Spinner from "./Spinner";

<<<<<<< HEAD
function CardList({ cards}) {
  return (
    <section className="card__list" aria-label="card section">
      {cards.map((card) => {
        return <Card key={card.id} card={card}/>;
      })}
    </section>
  );
=======
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
>>>>>>> 93c45213076cff43be4e9bcb029f453406272fc0
}

export default CardList;
