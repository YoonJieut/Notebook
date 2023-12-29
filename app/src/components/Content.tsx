// components/Content.tsx

import React from 'react';
import menuData from '@/data/menuData.json'; // 가정된 JSON 파일 경로

interface ContentProps {
  selectedMenu: string;
}

const Content: React.FC<ContentProps> = ({ selectedMenu }) => {
  const content = menuData.find(item => item.name === selectedMenu)?.content || "내용이 없습니다.";

  return (
    <div className="content width-500px h-5/6 p-4 outline outline-1 flex flex-col gap-6" >
      <div className='upBox flex-1 outline outline-1s'>
        <h1 className="font-size-2rem font-bold">{selectedMenu} 소개</h1>
        <p className="font-size-12px mt-4 leading-4">{content}</p>
      </div>
      <div className='downBox flex-1 outline outline-1'>
        <h1 className="font-size-1-5rem text-xl font-bold">{selectedMenu} 장점</h1>
        <p className="font-size-12px mt-4 leading-4">{content}</p>
      </div>
    </div>
  );
};

export default Content;
