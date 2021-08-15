import React, { useState } from 'react';
import people from '../../assets/icons/people.svg';
import coins from '../../assets/icons/coins.svg';
import MiniLogo from '../../components/UI/MiniLogo';
import { useQuery } from '../../hooks/useQuery';
import ConnectWalletModal from './ConnectWalletModal';
import WalletModal from './WalletModal';

function Navigation({ wrapperClassName, isOpen }) {
  const [parsedQuery, query, setQuery] = useQuery();
  const { walletConnected } = parsedQuery || {};
  const [connectWalletsOpen, setConnectWalletsOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);

  const ConnectWallet = () => (
    <button
      className="focus:outline-none bgPrimaryGradient py-2 px-4 rounded-3xl text-white"
      onClick={() => {
        if (walletConnected) {
          setWalletOpen(true);
        } else {
          setConnectWalletsOpen(true);
        }
      }}
    >
      {walletConnected ? '0x7a...66dc' : 'wallet not connected'}
    </button>
  );

  return (
    <div className={`w-full ${wrapperClassName}`}>
      <ConnectWalletModal
        open={connectWalletsOpen}
        onSetOpen={() => setConnectWalletsOpen(true)}
        onCloseModal={() => setConnectWalletsOpen(false)}
      />
      <WalletModal
        open={walletOpen}
        onSetOpen={() => setWalletOpen(true)}
        onCloseModal={() => setWalletOpen(false)}
      />
      {!isOpen && (
        <ul className="hidden lg:flex justify-between items-center w-full max-w-650 ml-auto">
          <li className="flex items-center space-x-2">
            <img src={people} alt="people" />
            <div className="">
              <div className="text-2xl text-white text-left">2865</div>
              <div className="text-secondary text-sm">Total VAI Minted</div>
            </div>
          </li>
          <li className="flex items-center space-x-2">
            <img src={coins} alt="coins" />
            <div className="">
              <div className="text-2xl text-white text-left">$25.45M</div>
              <div className="text-secondary text-sm">Total Value Locked</div>
            </div>
          </li>
          <li className="">
            <ConnectWallet />
          </li>
          <li className="">
            <MiniLogo size="md" />
          </li>
        </ul>
      )}
      <ul className="lg:hidden flex flex-col space-y-6 mt-4 pl-6">
        <li className="flex items-center space-x-2">
          <img className="w-8" src={people} alt="people" />
          <div className="">
            <div className="text-lg text-white text-center">2865</div>
            <div className="text-secondary text-xs">Total VAI Minted</div>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <img className="w-8" src={coins} alt="coins" />
          <div className="">
            <div className="text-lg text-white text-center">$25.45M</div>
            <div className="text-secondary text-xs">Total Value Locked</div>
          </div>
        </li>
        <li className="">
          <ConnectWallet />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
