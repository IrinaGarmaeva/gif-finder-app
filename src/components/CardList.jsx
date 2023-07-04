import Card from "./Card";

function CardList({ cards ,onCardClick}) {
  return (
    <section className="card__list" aria-label="Секция с карточками">
      {cards.map((card) => {
        return <Card key={card.id} card={card} onCardClick={onCardClick}/>;
      })}
    </section>
  );
}

export default CardList;
