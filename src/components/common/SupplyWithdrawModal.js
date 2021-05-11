import React, { useState } from 'react';
import Modal from '../UI/Modal';
import bitcoin from '../../assets/icons/bitcoin.svg';
import bitcoinBlack from '../../assets/icons/bitcoinBlack.svg';
import distribution from '../../assets/icons/distribution.svg';
import available from '../../assets/icons/available.svg';

function SupplyWithdrawModal({ open, onSetOpen, onCloseModal }) {
  const [currentTab, setCurrentTab] = useState('supply');

  const PrimaryList = () => (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="" src={bitcoinBlack} alt="bitcoin" />
          <div className="text-white">Supply APY</div>
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
          <div className="text-white">Available ANN Limit</div>
        </div>
        <div className="text-white">0 ANN</div>
      </div>
    </div>
  );

  const SecondaryList = () => (
    <div className="flex flex-col space-y-4 px-2 mt-8">
      <div className="flex justify-between items-center">
        <div className="text-white">Fee</div>
        <div className="text-white">0.1 BNB (0.01%)</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-white">Borrow Limit</div>
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
      {currentTab === 'supply' && (
        <>
          <div className="flex justify-center pb-4">
            <img className="w-14" src={bitcoin} alt="bitcoin" />
          </div>
          <div className="text-sm">
            To Supply BTCB to the Venus Protocol, you need to approve it first.
          </div>
        </>
      )}
      {currentTab === 'withdraw' && (
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
          <p className="text-center mt-6">
            Your available withdraw amount = Total Supply Amount - ANN Mint Amount - Borrowed Amount
          </p>
        </div>
      )}
      <div className="flex mt-16">
        <button
          className={`py-4 px-10 w-full focus:outline-none ${
            currentTab === 'supply' ? 'bg-primary' : 'bg-black'
          }`}
          onClick={() => setCurrentTab('supply')}
        >
          Supply
        </button>
        <button
          className={`py-4 px-10 w-full focus:outline-none ${
            currentTab === 'withdraw' ? 'bg-primary' : 'bg-black'
          }`}
          onClick={() => setCurrentTab('withdraw')}
        >
          Withdraw
        </button>
      </div>
      <div className="bg-black w-full mt-10 p-6">
        <PrimaryList />
        {currentTab === 'withdraw' && (
          <>
            <div className="mx-auto w-full max-w-md border-b border-solid border-darkerBlue mt-10" />
            <SecondaryList />
          </>
        )}
        <div className="mx-auto w-full max-w-md border-b border-solid border-darkerBlue mt-10" />
        <div className="flex justify-center mt-16">
          <button className="bg-primary py-2 rounded px-32 text-black">Enable</button>
        </div>
        <div className="flex justify-between mt-6">
          <div className="">Wallet Balance</div>
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
        afterCloseModal={() => setCurrentTab('supply')}
      />
    </div>
  );
}

export default SupplyWithdrawModal;
