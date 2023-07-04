import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import React from "react";
import { useEffect } from "react";

function Trends({
  currentItems,
  currentPage,
  itemsPerPage,
  gifs,
  setCurrentPage,
  showTrendingGifs,
}) {
  useEffect(() => {
    return showTrendingGifs;
  }, []);

  return (
    <>
      <CardList cards={currentItems} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={gifs.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Trends;
