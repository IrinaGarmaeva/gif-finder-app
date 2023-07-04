import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Search from "./pages/Search";
import Trends from "./pages/Trends";
import NotFound from "./pages/NotFound";
import RandomGif from "./pages/RandomGif";

function App() {
  const [gifPopupOpen, setGifPopupOpen] = React.useState({});

  function closePopups() {
    setGifPopupOpen({});
  }

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
            <Route path="/" element={<Search />} />{" "}
            <Route path="/trends" element={<Trends />} />{" "}
            <Route path="/random-gif" element={<RandomGif />} />{" "}
            <Route path="/*" element={<NotFound />} />{" "}
          </Routes>{" "}
        </main>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
