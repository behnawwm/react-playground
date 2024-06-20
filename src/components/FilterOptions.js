import React from 'react';

const FilterOptions = ({ filterOptions, setFilterOptions }) => {
  const handleCategoryChange = (e) => {
    setFilterOptions({
      ...filterOptions,
      category: e.target.value
    });
  };

  const handleAuthorChange = (e) => {
    setFilterOptions({
      ...filterOptions,
      author: e.target.value
    });
  };

  return (
    <div className="controls">
      <select value={filterOptions.category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
      </select>
      <input
        type="text"
        placeholder="Filter by author..."
        value={filterOptions.author}
        onChange={handleAuthorChange}
      />
    </div>
  );
};

export default FilterOptions;
