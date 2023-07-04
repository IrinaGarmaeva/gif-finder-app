import SearchField from "../components/SearchField";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";


function Search({
  gifs,
  currentItems,
  searchRequest,
  currentPage,
  itemsPerPage,
  isLoading,
  setCurrentPage,
  handleChange,
  handleClearInput,
  searchGifs,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchGifs();
  }

  return (
    <>
      <SearchField
        searchRequest={searchRequest}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        handleClearInput={handleClearInput}
      />
<<<<<<< HEAD
      <CardList cards={currentItems}/>
=======
      <CardList cards={currentItems} isLoading={isLoading} />
>>>>>>> 93c45213076cff43be4e9bcb029f453406272fc0
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
