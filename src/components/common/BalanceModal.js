import React from 'react';
import Modal from '../UI/Modal';
import logoBlueBg from '../../assets/icons/logoBlueBg.svg';

function WalletsModal({ open, onSetOpen, onCloseModal }) {
  const title = (
    <div className="text-center text-36 font-bold mt-4 mx-12 py-6 border-b border-solid border-gray">
      aToken Balance
    </div>
  );

  const content = (
    <div className="py-8 px-4 sm:p-20">
      <div className="flex flex-col justify-center items-center">
        <img className="" src={logoBlueBg} alt="logo" />
        <div className="text-24 font-bold mt-6">0.00000000</div>
        <div className="text-18 mt-2 text-gray">$0.00</div>
      </div>
      <div className="flex flex-col space-y-8 mt-10">
        <div
          className="flex justify-between items-center pb-6
                        border-b border-solid border-gray"
        >
          <div className="text-white text-24">Wallet Balance</div>
          <div className="text-24">0.0000</div>
        </div>
        <div
          className="flex justify-between items-center pb-6
                        border-b border-solid border-gray"
        >
          <div className="text-white text-24">Unclaimed Balance</div>
          <div className="text-24">0.0000</div>
        </div>
        <div className="flex justify-between items-center pb-6">
          <div className="text-white text-24">Price</div>
          <div className="text-24">0.00</div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button
          className="focus:outline-none bg-primary py-4 rounded-10px
                          text-36 w-full max-w-500 text-black"
        >
          Nothing to Claim
        </button>
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
        width="max-w-900"
      />
    </div>
  );
}

export default WalletsModal;
