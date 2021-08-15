import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useWindowSize } from '../../hooks/useWindowSize';
import Footer from './Footer';

function MainLayout({ children, mainClassName, title }) {
  const [isOpen, setIsOpen] = useState(true);

  const { width } = useWindowSize() || {};
  useEffect(() => {
    if (width < 1280) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [width]);

  return (
    <div className="flex bg-black h-full">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div
        className={`relative w-full h-full px-6 py-6 transition-all ease-in-out 
        flex flex-col min-h-screen`}
      >
        <Header onOpen={() => setIsOpen((bool) => !bool)} title={title} />
        <main className={`${mainClassName || ''}`}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
