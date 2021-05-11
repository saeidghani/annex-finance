import React, { useState } from 'react';
import Modal from '../UI/Modal';
import bitcoin from '../../assets/icons/bitcoin.svg';
import bitcoinBlack from '../../assets/icons/bitcoinBlack.svg';
import distribution from '../../assets/icons/distribution.svg';
import available from '../../assets/icons/available.svg';

function BorrowRepayModal({ open, onSetOpen, onCloseModal }) {
  const [currentTab, setCurrentTab] = useState('borrow');

  const PrimaryList = () => (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="" src={bitcoinBlack} alt="bitcoin" />
          <div className="text-white">Borrow APY</div>
        </div>
        <div className="text-white">0.68%</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="" src={distribution} alt="bitcoin" />
          <div className="text-white">Distribution APY</div>
        </div>
        <div className="text-white">4.32%</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="" src={available} alt="bitcoin" />
          <div className="text-white">Replay ANN Balance</div>
        </div>
        <div className="text-white">0 ANN</div>
      </div>
    </div>
  );

  const SecondaryList = () => (
    <div className="flex flex-col space-y-4 px-2 mt-8">
      <div className="flex justify-between items-center">
        <div className="text-white">Borrow Balancet</div>
        <div className="text-white">$0</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-white">Borrow Limit Used</div>
        <div className="text-white">0%</div>
      </div>
    </div>
  );

  const title = (
    <div
      className="flex justify-center items-center space-x-2 py-4 mx-14
                    border-b border-solid border-black"
    >
      <img className="w-8" src={bitcoin} alt="bitcoin" />
      <div>BTCB</div>
    </div>
  );
  const content = (
    <div className="py-6 px-14">
      <div className="px-8">
        <div className="grid grid-cols-3 justify-items-center items-center">
          <div />
          <div
            className="text-primary border-r border-solid border-primary
                            text-6xl pr-4"
          >
            0
          </div>
          <div className="justify-self-end">
            SAFE <br /> MAX
          </div>
        </div>
        {currentTab === 'repayBorrow' && (
          <p className="text-center mt-6">
            To Repay SXP to the Venus Protocol, you need to enable it first.
          </p>
        )}
      </div>
      <div className="flex mt-16">
        <button
          className={`py-4 px-10 w-full focus:outline-none ${
            currentTab === 'borrow' ? 'bg-primary' : 'bg-black'
          }`}
          onClick={() => setCurrentTab('borrow')}
        >
          Borrow
        </button>
        <button
          className={`py-4 px-10 w-full focus:outline-none ${
            currentTab === 'repayBorrow' ? 'bg-primary' : 'bg-black'
          }`}
          onClick={() => setCurrentTab('repayBorrow')}
        >
          Repay Borrow
        </button>
      </div>
      <div className="bg-black w-full mt-10 p-6">
        <PrimaryList />
        {currentTab === 'borrow' && (
          <>
            <div className="mx-auto w-full max-w-md border-b border-solid border-darkerBlue mt-10" />
            <SecondaryList />
          </>
        )}
        <div className="mx-auto w-full max-w-md border-b border-solid border-darkerBlue mt-10" />
        <div className="flex justify-center mt-16">
          <button className="bg-primary py-2 rounded px-32 text-black">Borrow</button>
        </div>
        <div className="flex justify-between mt-6">
          <div className="">{currentTab === 'borrow' ? 'Protocol Balance' : 'Wallet Balance'}</div>
          <div className="">0 SXP</div>
        </div>
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
        afterCloseModal={() => setCurrentTab('borrow')}
      />
    </div>
  );
}

export default BorrowRepayModal;
