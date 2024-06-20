import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import ErrorBoundary from './ErrorBoundary';
import Pagination from './Pagination';
import LoadingIndicator from './LoadingIndicator';
import SuggestedBooks from './SuggestedBooks';

const SecondhandBookstoreApp = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    category: '',
    author: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const booksPerPage = 10;


  const userHistory = [0.1, 0.2, 0.3]; // Example user browsing data
  const bookDetails = [0.4, 0.5, 0.6]; // Example book details for price prediction
  const bookImage = 'path/to/book/image.jpg'; // Example book image
  const reviewText = 'This is a sample review text.'; // Example review text


  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/books");
        const data = await response.json();

        setBooks(data.results);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(({_id,...searchParams}) => {
    console.log(searchParams);
    return (
      JSON.stringify(searchParams).toLowerCase().includes(searchQuery.toLowerCase())
     )
  });

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
      {loading ? <LoadingIndicator /> : (
        <ErrorBoundary>
          <BookList books={currentBooks} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </ErrorBoundary>
      )}
       <div className="App">
      <h1>Secondhand Book Website</h1>
      <SuggestedBooks />
    </div>
    </div>

  );
};

export default SecondhandBookstoreApp;
