// components/Layout.tsx

import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
