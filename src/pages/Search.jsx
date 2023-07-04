import SearchField from "../components/SearchField";
import CardList from "../components/CardList";
//import initialCards from "../utils/InitialCards";
import React from "react";
import { useState ,useEffect} from "react";
import { api } from "../utils/Api";


function Search() {
  const [gifs,setGifs] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  //это заглушка для картинок перед поиском, чтобы не повторяться с трендаит я начала с 12 гифки
  useEffect(() => {
    api.getTrendingGifs(12,12)
    .then((data) => {
      setGifs(
        data.data.map((gif) => {
          return gif;
        })
      );
    })
    .catch((error) => console.error(error));
  },[]);

  function closeAllPopups() {
    setSelectedCard({});
  }

  return (
    <>
      <SearchField setGifs={setGifs}/>
      <CardList cards={gifs} />
      <div>Search</div>
    </>
  )
}

export default Search;
