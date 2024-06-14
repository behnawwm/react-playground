import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import ErrorBoundary from './ErrorBoundary';
import Pagination from './Pagination';
import LoadingIndicator from './LoadingIndicator';

const SecondhandBookstoreApp = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    category: '',
    artist: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const booksPerPage = 10;

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/'+'https://www.w3schools.com/w3js/cd_catalog.js');
        const data = await response.json();

        setBooks(data.cd);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book => (
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterOptions.category === '' || book.category === filterOptions.category) &&
    (filterOptions.artist === '' || book.artist === filterOptions.artist)
  ));

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div className="container">
      <div className="parallax" style={{ backgroundImage: "url('https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-superJumbo.jpg')" }}>
        <h1>Secondhand Bookstore</h1>
      </div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterOptions filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
      {loading ? <LoadingIndicator /> : (
        <ErrorBoundary>
          <BookList books={currentBooks} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default SecondhandBookstoreApp;
