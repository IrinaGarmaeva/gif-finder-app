import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import CardList from "./CardList";

function SearchField({searchRequest, handleChange, onSubmit, handleClearInput }) {

  return (
    <div className="search">
      <form className="search__form" autoComplete="off" onSubmit={onSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Найти GIF"
          value={searchRequest}
          onChange={handleChange}
          minLength="2"
          maxLength="40"
        />
        <button type="submit" className="button search__button" />
        {searchRequest && (
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
