// components/Search.tsx
'use client';

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
    <div className="search w-full p-4 h-1/6">
      <input
        type="text"
        className="border p-2 mr-2 rounded w-full mb-3"
        value={searchTerm}
        placeholder='검색어를 입력하세요.'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="p-2 background-btn text-white rounded hover:bg-slate-700 w-full transition-all"
        onClick={handleSearch}
      >
        검색
      </button>
    </div>
  );
};

export default Search;
