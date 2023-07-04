import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import CardList from "./CardList";
import Button from "./Button";

function SearchField({
  searchRequest,
  handleChange,
  onSubmit,
  handleClearInput,
}) {
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
        <Button
          type={"submit"}
          className={"button_size_small search__button_type_search"}
        />
        {searchRequest && (
          <Button
            type={"button"}
            className={"button_size_small search__button_type_delete"}
            onClick={handleClearInput}
          />
        )}
      </form>
    </div>
  );
}

export default SearchField;
