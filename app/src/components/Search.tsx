// components/Search.tsx
'use client';

import React, { useState } from 'react';

interface SearchProps {
  onSearchSubmit: (searchTerm: string) => void;
  selectedMenu : string; // 현재 선택된 메뉴 이름
}

const Search: React.FC<SearchProps> = ({ onSearchSubmit, selectedMenu }) => {
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
        placeholder={selectedMenu ||'WRITE YOUR NAME'} 
        // placeholder에 selectedMenu를 넣어줌  
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="p-2 background-btn text-white rounded hover:bg-slate-700 w-full transition-all"
        onClick={handleSearch}
      >
        SHOW
      </button>
    </div>
  );
};

export default Search;
