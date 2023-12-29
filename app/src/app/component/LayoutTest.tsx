// components/Layout.tsx

import React from 'react';

const LayoutTest: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {children}
    </div>
  );
};

export default LayoutTest;
