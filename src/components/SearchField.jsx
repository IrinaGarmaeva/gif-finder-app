import { useState } from "react";


function SearchField() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form is submitted')
    // ДОПИСАТЬ ФУНКЦИЮ, ОТПРАВКА ЗАПРОСА НА СЕРВЕР, ВЫГРУЗКА ГИФ
  }

  const handleClearInput = () => {
    setText('');
  }

  return (
    <div className="search">
      <form className="search__form" autoComplete="off" onSubmit={handleSubmit}>
        <input
        type="text"
        className="search__input"
        placeholder="Найти GIF"
        value={text}
        onChange={handleChange}
        minLength='2'
        maxLength='40'
        />
        <button type="submit" className="button search__button"/>
        {text && <button type="button" className="button delete__button" onClick={handleClearInput}/>}
      </form>
    </div>
  )
}

export default SearchField
