import SearchField from "../components/SearchField";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import React from "react";
import { useState ,useEffect} from "react";
import { api } from "../utils/Api";

// стейты перенести в App или сделать глобальный стейт ?

function Search() {
  const [gifs, setGifs] = useState([]);
  const [searchRequest, setSearchRequest] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isError, setIsError] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gifs.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (e) => {
    setSearchRequest(e.target.value);
  };

  const handleClearInput = () => {
    setSearchRequest("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // изменить offset для того чтобы сделать до п страницы
    api
      .searchGifs(searchRequest, 100, 0)
      .then((data) => {
        setGifs(
          data.data.map((gif) => {
            return gif;
          })
        );
        setSearchRequest("");
      })
      .catch((error) => console.error(error));
  };


  // Change page
  // const changePage = pageNumber => setCurrentPage(pageNumber);

  //это заглушка для картинок перед поиском, чтобы не повторяться с трендаит я начала с 12 гифки
  // useEffect(() => {
  //   api.getTrendingGifs(12,12)
  //   .then((data) => {
  //     setGifs(
  //       data.data.map((gif) => {
  //         return gif;
  //       })
  //     );
  //   })
  //   .catch((error) => console.error(error));
  // },[]);


  return (
    <>
      <SearchField searchRequest={searchRequest} handleChange={handleChange} onSubmit={handleSubmit} handleClearInput={handleClearInput} />
      <CardList cards={currentItems} />
      <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={gifs.length} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Search;
