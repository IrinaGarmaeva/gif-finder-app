import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Trends from "./pages/Trends";
import NotFound from "./pages/NotFound";
import RandomGif from "./pages/RandomGif";

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <div className="page">
          <Header />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/random-gif" element={<RandomGif />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
