import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const RnMPagination = (props) => {
  return (
    <Pagination className='pagination' aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="/" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="/" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/characters">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="/characters" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="/characters" />
      </PaginationItem>
    </Pagination>
  );
}

export default RnMPagination;