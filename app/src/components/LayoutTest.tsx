// components/Layout.tsx

import React from 'react';

const LayoutTest: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="Layout flex h-5/6 w-5/6 gap-6">
      {children}
    </div>
  );
};

export default LayoutTest;
