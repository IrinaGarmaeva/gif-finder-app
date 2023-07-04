import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { api } from "./utils/Api";
import Header from "./components/Header";
import Search from "./pages/Search";
import Trends from "./pages/Trends";
import NotFound from "./pages/NotFound";
import RandomGif from "./pages/RandomGif";

function App() {
  const [gifSingle, setGifSingle] = useState(null);
  const [gifs, setGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isError, setIsError] = useState(false);
  const [searchRequest, setSearchRequest] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gifs.slice(indexOfFirstItem, indexOfLastItem);

  const location = useLocation();
  const showHeader =
    location.pathname == "/" ||
    location.pathname == "/trends" ||
    location.pathname == "/random-gif";

  const handleChange = (e) => {
    setSearchRequest(e.target.value);
  };

  const handleClearInput = () => {
    setSearchRequest("");
  };

  const searchGifs = () => {
    setIsLoading(true);
    api
      .searchGifs(searchRequest, 50, 0)
      .then((data) => {
        setGifs(
          data.data.map((gif) => {
            return gif;
          })
        );
        setSearchRequest("");
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  const showTrendingGifs = () => {
    setIsLoading(true);
    api
      .getTrendingGifs(50, 0)
      .then((data) => {
        setGifs(
          data.data.map((gif) => {
            return gif;
          })
        );
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  const getRandomGif = () => {
    setIsLoading(true);
    api
    .getRandomGifs()
    .then((data) => {
      setGifSingle(data.data);
      setIsLoading(false);
    })
    .catch((error) => console.error(error));
  }

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
                  isLoading={isLoading}
                  setCurrentPage={setCurrentPage}
                  handleChange={handleChange}
                  handleClearInput={handleClearInput}
                  searchGifs={searchGifs}
                />
              }
            />
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
            />
            <Route path="/random-gif" element={<RandomGif isLoading={isLoading} gifSingle={gifSingle} getRandomGif={getRandomGif} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
