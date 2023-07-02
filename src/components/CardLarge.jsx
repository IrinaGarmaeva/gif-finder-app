

// изменить  alt на имя или альт картинки с апи
function CardLarge() {
  return (
    <section className="card-large" aria-label="Случайная Гиф">
      <div>CardLarge</div>
      <img src='https://media1.giphy.com/media/g96QRNjWUvdKw/giphy.gif?cid=ecf05e4787b1cbzroe1chl04qyqczii81ngsw33atm43m55s&ep=v1_gifs_gifId&rid=giphy.gif&ct=g' alt="картинка" className="card-large__image" />
    </section>
  )
}

export default CardLarge
