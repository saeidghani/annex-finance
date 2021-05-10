import React, { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import logoMini from '../../assets/icons/logoMini.svg';
import people from '../../assets/icons/people.svg';
import coins from '../../assets/icons/coins.svg';
import settings from '../../assets/icons/settings.svg';
import menu from '../../assets/icons/menu.svg';
import MiniLogo from '../../components/UI/MiniLogo';

function Header({ onOpen }) {
  return (
    <header className="bg-fadeBlack flex justify-between items-center py-6 px-4 lg:px-8 rounded-lg w-full">
      <img className="hidden xl:block" src={logo} alt="a" />
      <img className="block xl:hidden mr-6" src={logoMini} alt="a" />
      <ul className="flex justify-between items-center w-full max-w-xl">
        <li className="flex flex-col md:flex-row items-center space-x-2">
          <img src={people} alt="people" />
          <div className="hidden sm:block">
            <div className="text-lg lg:text-2xl text-white text-center">2865</div>
            <div className="text-secondary text-xs lg:text-sm">Total VAI Minted</div>
          </div>
        </li>
        <li className="flex flex-col md:flex-row items-center space-x-2">
          <img src={coins} alt="coins" />
          <div className="hidden sm:block">
            <div className="text-lg lg:text-2xl text-white text-center">$25.45M</div>
            <div className="text-secondary text-xs lg:text-sm">Total Value Locked</div>
          </div>
        </li>
        <li className="">
          <img src={settings} alt="settings" />
        </li>
        <li className="">
          <button className="bgPrimaryGradient py-2 px-4 lg:px-8 rounded-3xl text-white">
            ddddd
          </button>
        </li>
        <li>
          <MiniLogo />
        </li>
        <li className="lg:hidden ml-2">
          <div onClick={onOpen}>
            <img src={menu} alt="" />
          </div>
        </li>
      </ul>
      {/*      <label htmlFor="menu-toggle" className="cursor-pointer block lg:hidden ml-4">
        <img src={menu} alt="" />
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />*/}
    </header>
  );
}

export default Header;
