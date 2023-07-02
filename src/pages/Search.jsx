import SearchField from "../components/SearchField";
import CardList from "../components/CardList";
import initialCards from "../utils/InitialCards";


function Search() {
  return (
    <>
      <SearchField />
      <CardList cards={initialCards} />
      <div>Search</div>
    </>
  )
}

export default Search
