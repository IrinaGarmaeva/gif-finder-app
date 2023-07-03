import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import CardList from "./CardList";

function SearchField({setGifs }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // изменить offset для того чтобы сделать до п страницы
    api
      .searchGifs(text, 12, 0)
      .then((data) => {
        setGifs(
          data.data.map((gif) => {
            return gif;
          })
        );
      })
      .catch((error) => console.error(error));
  };

  const handleClearInput = () => {
    setText("");
  };

  return (
    <div className="search">
      <form className="search__form" autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Найти GIF"
          value={text}
          onChange={handleChange}
          minLength="2"
          maxLength="40"
        />
        <button type="submit" className="button search__button" />
        {text && (
          <button
            type="button"
            className="button delete__button"
            onClick={handleClearInput}
          />
        )}
      </form>
    </div>
  );
}

export default SearchField;
