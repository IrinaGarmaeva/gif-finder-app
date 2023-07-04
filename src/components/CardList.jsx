import Card from "./Card";

function CardList({ cards }) {
  return (
    <section className="card__list" aria-label="card section">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </section>
  );
}

export default CardList;
