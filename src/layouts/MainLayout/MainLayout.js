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
        className={`w-full h-full px-2 py-6 ${
          width > 1023 && isOpen
            ? 'pl-66 2xl:pl-90 pr-4 2xl:pr-8'
            : width > 1023 && !isOpen
            ? 'px-8'
            : ''
        }`}
      >
        <Header onOpen={() => setIsOpen((bool) => !bool)} title={title} />
        <main className={`${mainClassName}`}>{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
