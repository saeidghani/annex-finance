import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-black relative">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {isOpen && (
        <div
          className="lg:hidden bg-black opacity-50 absolute top-0 bottom-0 left-0 right-0"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="w-full sm:px-2 lg:px-8 py-6">
        <Header onOpen={() => setIsOpen((bool) => !bool)} />
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
