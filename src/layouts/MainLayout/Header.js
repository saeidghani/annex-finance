import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/common/Navigation';
import menu from '../../assets/icons/menu.svg';

function Header({ onOpen }) {
  const [currentTitle, setCurrentTitle] = useState('');
  const { pathname, search } = useLocation();
  const path = `${pathname}${search}`;

  useEffect(() => {
    let currentTitle = '';
    const titles = {
      dashboard: 'Lending',
      vote: 'vote',
      annex: 'annex',
      market: 'market',
      vault: 'vault',
      swap: 'swap',
      liquidity: 'liquidity',
      farms: 'farms',
      pools: 'pools',
    };
    Object.keys(titles)?.forEach((title) => {
      if (path?.includes(title)) {
        currentTitle = titles[title];
      }
    });
    setCurrentTitle(currentTitle);
  }, [path]);

  return (
    <header
      className="bg-fadeBlack flex justify-between items-center py-6 px-4
                       pl-6 lg:pr-8 rounded-lg w-full"
    >
      <div className="ml-2 flex items-center">
        <div className="w-14 cursor-pointer" onClick={onOpen}>
          <img className="w-full" src={menu} alt="" />
        </div>
        <h2 className="text-white ml-5 text-36 font-bold uppercase">{currentTitle}</h2>
      </div>
      <Navigation wrapperClassName="hidden lg:block" />
    </header>
  );
}

export default Header;
