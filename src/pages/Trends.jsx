import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import React from "react";
import { useState,useEffect } from "react";
import { api } from "../utils/Api";

function Trends() {
  const [gifs, setGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);


  useEffect(() => {
    api.getTrendingGifs(100,0)
    .then((data) => {
      setGifs(
        data.data.map((gif) => {
          return gif;
        })
      );
    })
    .catch((error) => console.error(error));
  },[]);


  return (
    <>
    <CardList cards={gifs} />
    <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={gifs.length} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Trends;
