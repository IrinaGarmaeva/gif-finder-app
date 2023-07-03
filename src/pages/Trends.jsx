import CardList from "../components/CardList";
import initialCards from "../utils/InitialCards";
import React from "react";
import { useState,useEffect } from "react";
import { api } from "../utils/Api";

function Trends() {

  const [gifs,setGifs] = React.useState([]);

  useEffect(() => {
    api.getTrendingGifs(12,0)
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
    <CardList cards={gifs} />
  )
}

export default Trends;
