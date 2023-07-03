import SearchField from "../components/SearchField";
import Pagination from "../components/Pagination";
import CardList from "../components/CardList";
import initialCards from "../utils/InitialCards";


function Search() {
  return (
    <>
      <SearchField />
      <CardList cards={initialCards} />
      <Pagination postsPerPage={} totalPosts={} paginate={}/>
    </>
  )
}

export default Search
