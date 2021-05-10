import React from 'react';
import Modal from '../UI/Modal';

function SupplyWithdrawModal() {
  const title = (
    <div className="">
      <div>BTCB</div>
    </div>
  );
  const content = (
    <div>
      <div className="">To Supply BTCB to the Venus Protocol, you need to approve it first.</div>
      <div className="flex">
        <button className="bg-primary py-4 px-10 w-full">Supply</button>
        <button className="bg-black py-4 px-10 w-full">Withdraw</button>
      </div>
      <div className="bg-black w-full">
        <div className="flex justify-between items-center">
          <div className="text-white">Supply APY</div>
          <div className="text-white">0.68%</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-white">Distribution APY</div>
          <div className="text-white">4.32%</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-white">Available ANN Limit</div>
          <div className="text-white">0 ANN</div>
        </div>
        <button className="bg-primary py-4 px-10 w-full">Enable</button>
        <div className="flex justify-between">
          <div className="">Wallet Balance</div>
          <div className="">0 SXP</div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Modal title={title} content={content} />
    </div>
  );
}

export default SupplyWithdrawModal;
