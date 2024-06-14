import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SecondhandBookstoreApp from './components/SecondhandBookstoreApp';
import BookDetails from './components/BookDetails';
import UserProfile from './components/UserProfile';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SecondhandBookstoreApp />} />
      <Route path="/profile" element={<PrivateRoute component={UserProfile} />} />
      <Route path="/books/:id" element={<BookDetails />} />
    </Routes>
  );
};

export default App;
