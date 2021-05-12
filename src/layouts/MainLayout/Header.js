import React from 'react';

import Navigation from '../../components/common/Navigation';
import menu from '../../assets/icons/menu.svg';

function Header({ onOpen }) {
  return (
    <header className="bg-fadeBlack flex justify-between items-center py-6 px-4 lg:px-8 rounded-lg w-full">
      <div className="ml-2 flex items-center" onClick={onOpen}>
        <img src={menu} alt="" />
        <h2 className="text-white ml-5 text-4xl font-bold">LENDING</h2>
      </div>
      <Navigation wrapperClassName="hidden lg:block" />
    </header>
  );
}

export default Header;
