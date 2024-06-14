import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button key={number} onClick={() => onPageChange(number)} className={currentPage === number ? 'active' : ''}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

