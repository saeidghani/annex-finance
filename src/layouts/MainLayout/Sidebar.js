/* eslint-disable */
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import underscore from '../../assets/icons/underscore.svg';
import filledArrow from '../../assets/icons/filledArrow.svg';
import arrow from '../../assets/icons/arrow.svg';
import logo from '../../assets/icons/logo.svg';
import Navigation from '../../components/common/Navigation';
import {
  DashboardIcon,
  AnnexIcon,
  FarmsIcon,
  MarketIcon,
  PoolsIcon,
  TradeIcon,
  VaultIcon,
  VoteIcon,
} from '../../components/common/Icons';
import Dashboard from '../../pages/Dashboard';

const sidebarItems = [
  { key: 1, icon: (fill) => <DashboardIcon fill={fill} />, title: 'Dashboard', href: '/dashboard' },
  { key: 2, icon: (fill) => <VoteIcon fill={fill} />, title: 'Vote', href: '/vote' },
  { key: 3, icon: (fill) => <AnnexIcon fill={fill} />, title: 'Annex', href: '/annex' },
  { key: 4, icon: (fill) => <MarketIcon fill={fill} />, title: 'Market', href: '/market' },
  { key: 5, icon: (fill) => <VaultIcon fill={fill} />, title: 'Vault', href: '/vault' },
  {
    key: 6,
    icon: (fill) => <TradeIcon fill={fill} />,
    title: 'Trade',
    href: '/trade?tab=swap',
    subCats: [
      { key: 1, icon: underscore, title: 'Swap', href: '/trade?tab=swap' },
      { key: 2, icon: underscore, title: 'Liquidity', href: '/trade?tab=liquidity' },
    ],
  },
  { key: 7, icon: (fill) => <FarmsIcon fill={fill} />, title: 'Farms', href: '/farms' },
  { key: 8, icon: (fill) => <PoolsIcon fill={fill} />, title: 'Pools', href: '/pools' },
];

function Sidebar({ isOpen, onClose }) {
  const { pathname, search } = useLocation();
  const history = useHistory();

  const primaryColor = '#FF9800';

  const NavItems = ({ wrapperClassName, items }) => (
    <div className={wrapperClassName}>
      <div className="flex flex-col space-y-4 text-white">
        {items?.map((i) => (
          <div key={i.key}>
            <div
              className={`sidebar-item gap-x-4 items-center cursor-pointer
                       py-2 pl-8 pr-6 rounded-3xl 2xl:pl-12 2xl:pr-20 ${
                         i?.href?.includes(pathname) ? 'bg-black' : ''
                       }`}
              onClick={() => {
                if (i.href) {
                  history.push(i.href);
                }
              }}
            >
              <div className="flex items-center" onClick={() => {}}>
                <div className="w-10">{i.icon(i.href === pathname ? primaryColor : '')}</div>
                <div className="text-23 2xl:text-24">{i.title}</div>
              </div>
              {i.subCats && (
                <img
                  className={i?.href?.includes(pathname) ? 'transform rotate-90' : ''}
                  src={filledArrow}
                  alt={i.title}
                />
              )}
            </div>
            {i?.href?.includes(pathname) && (
              <div
                className={`bg-blue-500 overflow-hidden pl-6 2xl:pl-10 transform transition-all duration-300 ease-in-out`}
              >
                {i.subCats?.map((cat) => (
                  <div
                    className="flex items-center space-x-4 ml-12 mb-2 mt-4 cursor-pointer"
                    key={cat.key}
                    onClick={() => {
                      history.push(cat.href);
                    }}
                  >
                    <img src={cat.icon} alt={cat.title} />
                    <div
                      className={
                        cat?.href?.includes(`${pathname}${search}`)
                          ? 'text-primary text-23 2xl:text-24'
                          : 'text-23 2xl:text-24'
                      }
                    >
                      {cat.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <aside
      className={`bg-fadeBlack pt-6 fixed h-full overflow-auto flex flex-col
                   transform ease-in-out transition-all duration-300 z-30 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="xl:opacity-0 flex justify-end pr-6 cursor-pointer" onClick={onClose}>
        <img className="w-2" src={arrow} alt="arrow" />
      </div>
      <img className="mt-5 mb-4 w-40 mx-auto" src={logo} alt="" />
      <NavItems items={sidebarItems} wrapperClassName="mt-12" />
      <Navigation isOpen={isOpen} wrapperClassName="block xl:hidden" />
      <div className="mt-auto mb-10 pl-8">
        <div className="font-bold text-white">Annex Trading</div>
        <div className="text-gray text-sm">© 2021 All Rights Reserved</div>
      </div>
    </aside>
  );
}

export default Sidebar;
