'use client';

import React, { useState } from 'react';
import Layout from '@/components/LayoutTest';
import Menu from '@/components/Menu';
import Content from '@/components/Content';
import Search from '@/components/Search';

const HomePage = () => {
  const [selectedMenu, setSelectedMenu] = useState('메뉴1');

  const handleMenuSelect = (menuName: string) => {
    setSelectedMenu(menuName);
  };

  const handleSearchSubmit = (searchTerm: string) => {
    setSelectedMenu(searchTerm);
  };

  return (
    <Layout>
      <div className="flex">
        <Menu onMenuSelect={handleMenuSelect} />
        <div className="flex-grow">
          <Content selectedMenu={selectedMenu} />
          <Search onSearchSubmit={handleSearchSubmit} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;