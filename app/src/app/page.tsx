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
    <div id="root" className='w-screen h-screen flex justify-center items-center'>
      <Layout>
        <Menu onMenuSelect={handleMenuSelect} selectedMenu={selectedMenu} />
        <div className='verticalLine h-full border-r-2'></div>
        <div className="width-500px h-full outline outline-1 flex flex-col justify-between">
          <Content selectedMenu={selectedMenu} />
          <Search onSearchSubmit={handleSearchSubmit} selectedMenu={selectedMenu} />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;