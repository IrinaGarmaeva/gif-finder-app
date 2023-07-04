import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { api } from "./utils/Api";
import Header from "./components/Header";
import Search from "./pages/Search";
import Trends from "./pages/Trends";
import NotFound from "./pages/NotFound";
import RandomGif from "./pages/RandomGif";
import React from "react";

function App() {
  const [gifs, setGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isError, setIsError] = useState(false);
  const [searchRequest, setSearchRequest] = useState("");

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
    api
      .searchGifs(searchRequest, 100, 0)
      .then((data) => {
        if (data.data.length !== 0) {
          setGifs(
            data.data.map((gif) => {
              return gif;
            })
          );
          setSearchRequest("");
        } else {
          alert("Ничего не найдено");
        }
      })
      .catch((error) => console.error(error));
  };

  const showTrendingGifs = () => {
    api
      .getTrendingGifs(100, 0)
      .then((data) => {
        setGifs(
          data.data.map((gif) => {
            return gif;
          })
        );
      })
      .catch((error) => console.error(error));
  };

  const location = useLocation();
  const showHeader =
    location.pathname == "/" ||
    location.pathname == "/trends" ||
    location.pathname == "/random-gif";

  return (
    <div className="root">
      <div className="page">
        {showHeader && <Header />}
        <main className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Search
                  gifs={gifs}
                  currentItems={currentItems}
                  searchRequest={searchRequest}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  setCurrentPage={setCurrentPage}
                  handleChange={handleChange}
                  handleClearInput={handleClearInput}
                  handleSubmit={handleSubmit}
                />
              }
            />{" "}
            <Route
              path="/trends"
              element={
                <Trends
                  currentItems={currentItems}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  gifs={gifs}
                  setCurrentPage={setCurrentPage}
                  showTrendingGifs={showTrendingGifs}
                />
              }
            />{" "}
            <Route path="/random-gif" element={<RandomGif />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
