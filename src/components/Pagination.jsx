function Pagination ({ currentPage, itemsPerPage, totalItems, setCurrentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pages.map(number => (
          <li key={number} className={`pagination__item ${number === currentPage ? 'pagination__item_active' : ''}`} onClick={() => setCurrentPage(number)}>
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;


