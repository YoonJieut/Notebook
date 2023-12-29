// components/Layout.tsx

import React from 'react';

const LayoutTest: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="Layout h-5/6 w-1/2 flex gap-6 justify-center items-center">
      {children}
    </div>
  );
};

export default LayoutTest;
