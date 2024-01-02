
// components/Content.tsx

import React from 'react';
import menuData from '@/data/menuData.json'; // 가정된 JSON 파일 경로
// ? 데코레이터란 무엇일까? 
//@"는 절대 경로를 나타냅니다. 일반적으로 "@"는 프로젝트의 루트 디렉토리를 가리킵니다. 이것은 프로젝트의 구조를 단순화하고 모듈을 더 쉽게 임포트할 수 있도록 도와줍니다.


interface ContentProps {
  selectedMenu: string;
}

const Content: React.FC<ContentProps> = ({ selectedMenu }) => {
  const content = menuData.find(item => item.name === selectedMenu)?.content || "내용이 없습니다.";

  return (
    <div className="content width-500px h-5/6 p-4  flex flex-col gap-6" >
      <div className='upBox flex-1 s'>
        <h1 className="font-size-2rem font-bold">{selectedMenu} 소개</h1>
        <p className="font-size-12px mt-4 leading-4">{content}</p>
      </div>
      <div className='downBox flex-1 '>
        <h1 className="font-size-1-5rem text-xl font-bold">{selectedMenu} 장점</h1>
        <p className="font-size-12px mt-4 leading-4">{content}</p>
      </div>
    </div>
  );
};

export default Content;
