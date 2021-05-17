import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function MainLayout({ children, mainClassName }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex bg-black">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {isOpen && (
        <div
          className="lg:hidden bg-black opacity-50 absolute top-0 bottom-0 left-0 right-0"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="w-full px-2 lg:px-8 py-6">
        <Header onOpen={() => setIsOpen((bool) => !bool)} />
        <main className={`${mainClassName}`}>{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
