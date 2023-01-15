import React from "react";
import Pagination from "react-bootstrap/Pagination";

function createPagination({ page, setPage, maxpages, setMaxpages }) {
  const decrementPage = () => {
    setPage(page - 1);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  return (
    <Pagination className="pagination">
      {page > 1 ? (
        <Pagination.Prev onClick={decrementPage} id="back-arrow" />
      ) : (
        ""
      )}
      {page < maxpages ? (
        <Pagination.Next onClick={incrementPage} id="next-arrow" />
      ) : (
        ""
      )}
    </Pagination>
  );
}

export default createPagination;
