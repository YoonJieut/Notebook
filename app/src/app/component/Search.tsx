// components/Search.tsx

import React, { useState } from 'react';

interface SearchProps {
  onSearchSubmit: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearchSubmit(searchTerm);
  };

  return (
    <div className="search w-full p-4">
      <input
        type="text"
        className="border p-2 mr-2 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        검색
      </button>
    </div>
  );
};

export default Search;
