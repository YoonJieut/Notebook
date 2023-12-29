// components/Content.tsx

import React from 'react';
import menuData from '@/data/menuData.json'; // 가정된 JSON 파일 경로

interface ContentProps {
  selectedMenu: string;
}

const Content: React.FC<ContentProps> = ({ selectedMenu }) => {
  const content = menuData.find(item => item.name === selectedMenu)?.content || "내용이 없습니다.";

  return (
    <div className="content width-500px h-5/6 p-4 outline outline-1 flex flex-col">
        <h1 className="text-xl font-bold">{selectedMenu} 소개</h1>
        <p className="mt-4">{content}</p>
        <h1 className="text-xl font-bold">{selectedMenu} 장점</h1>
        <p className="mt-4">{content}</p>
    </div>
  );
};

export default Content;
