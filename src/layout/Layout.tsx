import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1 >App Header</h1>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <h1>App Footer</h1>
      </footer>
    </div>
  );
};

export default Layout;
