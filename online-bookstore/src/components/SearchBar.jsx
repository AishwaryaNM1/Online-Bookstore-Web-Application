import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="my-4 text-center">
      <input
        type="text"
        placeholder="Search books..."
        value={value}
        onChange={onChange}
        className="p-2 border rounded w-1/2"
      />
    </div>
  );
};

export default SearchBar;
