
import Button from "../components/Button";

// получает карточку, изменить  alt на имя или альт картинки с апи
function RandomGif({}) {
  const handleClick = () => {
    console.log("НАЖАЛИ НА КНОПКУ ЕЩЕ");
    // добавить выдачу новой рандомной гифки
  };

  return (
    <div className="random">
      <img
        src="https://media1.giphy.com/media/g96QRNjWUvdKw/giphy.gif?cid=ecf05e4787b1cbzroe1chl04qyqczii81ngsw33atm43m55s&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
        alt="картинка"
        className="random__image"
      />
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
