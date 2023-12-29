// components/Menu.tsx
'use client';

// components/Menu.tsx

import React from 'react';
import menuData from '@/data/menuData.json'; // 가정된 JSON 파일 경로

interface MenuProps {
  onMenuSelect: (menuName: string) => void;
  selectedMenu: string; // props로 selectedMenu를 받음
}

const Menu: React.FC<MenuProps> = ({ onMenuSelect, selectedMenu }) => {
  return (
    <div className="menu w-1/6 h-full p-4 flex flex-col  overflow-hidden justify-between">
      {menuData.map((item, index) => (
        <button
          key={index}
          className={`transition-all block w-full p-2 mb-2 text-left rounded font-size-12px flex items-center  ${selectedMenu === item.name ? 'pl-8 relative' : ''}`}
          onClick={() => onMenuSelect(item.name)}
        >
          {selectedMenu === item.name && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-600 rounded-full"></div>
          )}
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Menu;
