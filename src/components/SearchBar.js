import React, { useState } from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(inputValue);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search books..."
      value={inputValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default SearchBar;
