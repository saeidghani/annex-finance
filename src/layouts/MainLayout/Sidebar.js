import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';
import dashboard from '../../assets/icons/dashboard.svg';
import vote from '../../assets/icons/vote.svg';
import annex from '../../assets/icons/annex.svg';
import market from '../../assets/icons/market.svg';
import vault from '../../assets/icons/vault.svg';
import trade from '../../assets/icons/trade.svg';
import farms from '../../assets/icons/farms.svg';
import pools from '../../assets/icons/pools.svg';
import underscore from '../../assets/icons/underscore.svg';
import filledArrow from '../../assets/icons/filledArrow.svg';
import arrow from '../../assets/icons/arrow.svg';
import Navigation from '../../components/common/Navigation';

const sidebarItems = [
  { key: 1, icon: dashboard, title: 'Dashboard', href: '/dashboard' },
  { key: 2, icon: vote, title: 'Vote', href: '/vote' },
  { key: 3, icon: annex, title: 'Annex', href: '/annex' },
  { key: 4, icon: market, title: 'Market', href: '/market' },
  { key: 5, icon: vault, title: 'Vault', href: '/vault' },
  {
    key: 6,
    icon: trade,
    title: 'Trade',
    href: '/trade',
    subCats: [
      { key: 1, icon: underscore, title: 'Swap', href: '/trade/swap' },
      { key: 2, icon: underscore, title: 'Farm', href: '/trade/farm' },
    ],
  },
  { key: 7, icon: farms, title: 'Farms', href: '/farms' },
  { key: 8, icon: pools, title: 'Pools', href: '/pools' },
];

function Sidebar({ isOpen, onClose }) {
  const { pathname } = useLocation();
  const [displaySubCats, setDisplaySubCats] = useState([]);

  const NavItems = ({ wrapperClassName, items }) => (
    <div className={wrapperClassName}>
      <div className="flex flex-col space-y-4 text-white">
        {sidebarItems?.map((i) => (
          <Link key={i.key} to={i.href}>
            <div
              className={`sidebar-item gap-x-4 items-center cursor-pointer
                       py-2 pl-8 pr-6 rounded-tr-3xl rounded-br-3xl ${
                         i.href === pathname ? 'bg-black' : ''
                       }`}
              onClick={() =>
                setDisplaySubCats((prevCubCats) => {
                  if (!prevCubCats?.includes(i.key)) {
                    return [...prevCubCats, i.key];
                  } else {
                    return displaySubCats?.filter((c) => c !== i.key);
                  }
                })
              }
            >
              <div className="flex items-center">
                <div className="w-10">
                  <img src={i.icon} alt={i.title} />
                </div>
                <div>{i.title}</div>
              </div>
              {i.subCats && (
                <img
                  className={displaySubCats?.includes(i.key) ? 'transform rotate-90' : ''}
                  src={filledArrow}
                  alt={i.title}
                />
              )}
            </div>
            {
              <div
                className={`overflow-hidden transform transition-all duration-300 ease-in-out ${
                  displaySubCats?.includes(i.key) ? 'max-h-55' : 'max-h-0'
                }`}
              >
                {i.subCats?.map((cat) => (
                  <div className="flex items-center space-x-4 ml-12 mb-2" key={cat.key}>
                    <img src={cat.icon} alt={cat.title} />
                    <div className="">{cat.title}</div>
                  </div>
                ))}
              </div>
            }
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden xl:block bg-fadeBlack pt-16 relative">
        <img className="w-40 m-auto" src={logo} alt="logo" />
        <NavItems items={sidebarItems} wrapperClassName="pt-20" />
        <div className="mt-20 pl-8">
          <div className="font-bold text-white">Annex Trading</div>
          <div className="text-gray text-sm">© 2021 All Rights Reserved</div>
        </div>
      </aside>
      <aside
        className={`block xl:hidden bg-fadeBlack pt-6 px-2 transform 
                    absolute top-0 bottom-0 left-0 ease-in-out transition-all duration-300 z-30
                     ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end pr-6 mb-6" onClick={onClose}>
          <img className="" src={arrow} alt="arrow" />
        </div>
        <NavItems items={sidebarItems} wrapperClassName="mt-8" />
        <Navigation />
      </aside>
    </>
  );
}

export default Sidebar;
