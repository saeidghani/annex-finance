import React from 'react';
import logo from '../../assets/icons/logo.svg';
import Navigation from '../../components/common/Navigation';
import menu from '../../assets/icons/menu.svg';

function Header({ onOpen }) {
  return (
    <header className="bg-fadeBlack flex justify-between items-center py-6 px-4 lg:px-8 rounded-lg w-full">
      <img className="" src={logo} alt="logo" />
      <Navigation wrapperClassName="hidden lg:block" />
      <div className="lg:hidden ml-2" onClick={onOpen}>
        <img src={menu} alt="" />
      </div>
    </header>
  );
}

export default Header;
