import React from 'react';

import Navigation from '../../components/common/Navigation';
import menu from '../../assets/icons/menu.svg';

function Header({ onOpen, title }) {
  return (
    <header
      className="bg-fadeBlack flex justify-between items-center py-6 px-4
                       pl-6 lg:pr-8 rounded-lg w-full"
    >
      <div className="ml-2 flex items-center">
        <div className="cursor-pointer" onClick={onOpen}>
          <img className="" src={menu} alt="" />
        </div>
        <h2 className="text-white ml-5 text-4xl font-bold">{title}</h2>
      </div>
      <Navigation wrapperClassName="hidden lg:block" />
    </header>
  );
}

export default Header;
