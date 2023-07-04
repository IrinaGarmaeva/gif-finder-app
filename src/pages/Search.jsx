import SearchField from "../components/SearchField";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import React from "react";

function Search({
  gifs,
  currentItems,
  searchRequest,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  handleChange,
  handleClearInput,
  handleSubmit,
}) {
  return (
    <>
      <SearchField
        searchRequest={searchRequest}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        handleClearInput={handleClearInput}
      />
      <CardList cards={currentItems}/>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={gifs.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Search;
