// components/Menu.tsx

import React from 'react';
import menuData from '../data/menuData.json'; // 가정된 JSON 파일 경로

interface MenuProps {
  onMenuSelect: (menuName: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuSelect }) => {
  return (
    <div className="menu w-1/4 p-4 flex flex-col">
      {menuData.map((item, index) => (
        <button
          key={index}
          className="block w-full p-2 mb-2 text-left text-white bg-blue-500 hover:bg-blue-600 rounded"
          onClick={() => onMenuSelect(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Menu;
