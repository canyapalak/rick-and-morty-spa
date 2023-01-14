import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function createPagination({page, setPage, maxpages, setMaxpages}) {

    const decrementPage = () => {
        //console.log(page)      
      setPage(page - 1);
      
    }
 
    const incrementPage = () => {
        //console.log(page)
      // disable if more than max
      setPage(page + 1);
      
      
    }
 
  return (
    <Pagination className='pagination'>
      {page>1 ? 
<Pagination.Prev onClick={decrementPage} id="back-arrow"/> : ("")
      }
        { page < maxpages ? 
<Pagination.Next onClick={incrementPage} id="next-button"/> :  ("")
      }
  </Pagination>
  );
}

export default createPagination;