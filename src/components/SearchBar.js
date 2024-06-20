import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='controls'>
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
