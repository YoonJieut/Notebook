// pages/index.tsx
'use client';

import React, { useState } from 'react';
import LayoutTest from '../../ui/LayoutTest';
import Menu from '../../ui/Menu';
import Content from '../../ui/Content';
import Search from '../../ui/Search';

const HomePage = () => {
  const [selectedMenu, setSelectedMenu] = useState('메뉴1');

  const handleMenuSelect = (menuName: string) => {
    setSelectedMenu(menuName);
  };

  const handleSearchSubmit = (searchTerm: string) => {
    setSelectedMenu(searchTerm);
  };

  return (
    <LayoutTest>
      <div className="flex">
        <Menu onMenuSelect={handleMenuSelect} />
        <div className="flex-grow">
          <Content selectedMenu={selectedMenu} />
          <Search onSearchSubmit={handleSearchSubmit} />
        </div>
      </div>
    </LayoutTest>
  );
};

export default HomePage;
