import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div className="books">
      {books.map(book => (
        <div key={book.id} className="book">
          <h3>{book.title}</h3>
          <p>Author: {book.artist}</p>
          <p>Category: {book.category}</p>
          <p>Price: ${book.price}</p>
          <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
