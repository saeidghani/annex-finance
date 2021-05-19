import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useWindowSize } from '../../hooks/useWindowSize';

function MainLayout({ children, mainClassName, title }) {
  const [isOpen, setIsOpen] = useState(true);

  const { width } = useWindowSize() || {};
  useEffect(() => {
    if (width < 1280) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <div className="flex bg-black">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {isOpen && (
        <div
          className="lg:hidden bg-black opacity-50 absolute top-0 bottom-0 left-0 right-0"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`w-full h-full pr-6 py-6 my-contents transition-all ease-in-out ${
          isOpen ? 'open' : 'pl-6'
        }`}
      >
        <Header onOpen={() => setIsOpen((bool) => !bool)} title={title} />
        <main className={`${mainClassName}`}>{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
