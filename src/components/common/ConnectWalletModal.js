import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import logoMini from '../../assets/icons/logoMini.svg';
import bigArrow from '../../assets/icons/bigArrow.svg';
import metaMask from '../../assets/icons/metaMask.svg';
import ledger from '../../assets/icons/ledger.svg';
import walletConnect from '../../assets/icons/walletConnect.svg';
import coinbaseWallet from '../../assets/icons/coinbaseWallet.svg';

function ConnectWalletModal({ open, onSetOpen, onCloseModal }) {
  const title = (
    <div className="flex flex-col justify-center items-center space-y-6 mt-10">
      <div className="rounded-full bg-darkBlue p-4 border border-solid border-gray-600">
        <img className="" src={logoMini} alt="logo" />
      </div>
      <div className="text-36 font-bold">Connect Wallet</div>
      <div className="text-24">To start using AToken</div>
    </div>
  );

  const content = (
    <div className="p-14">
      <div className="flex flex-col space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img className="w-12" src={metaMask} alt="arrow" />
            <div className="text-white text-36">MetaMask</div>
          </div>
          <img className="w-7" src={bigArrow} alt="arrow" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img className="w-12" src={ledger} alt="arrow" />
            <div className="text-white text-36">Ledger</div>
          </div>
          <img className="w-7" src={bigArrow} alt="arrow" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img className="w-12" src={walletConnect} alt="arrow" />
            <div className="text-white text-36">Wallet Connect</div>
          </div>
          <img className="w-7" src={bigArrow} alt="arrow" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img className="w-12" src={coinbaseWallet} alt="arrow" />
            <div className="text-white text-36">Coinbase Wallet</div>
          </div>
          <img className="w-7" src={bigArrow} alt="arrow" />
        </div>
      </div>
      <div className="text-center text-24 mt-10">
        By connecting, I accept AToken
        <Link to="/#">
          <span className="text-primary ml-2">Terms of Service</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        title={title}
        content={content}
        open={open}
        onSetOpen={onSetOpen}
        onCloseModal={onCloseModal}
        afterCloseModal={() => {}}
      />
    </div>
  );
}

export default ConnectWalletModal;
