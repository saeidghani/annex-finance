import React from 'react';
import Modal from '../UI/Modal';
import tickBox from '../../assets/icons/tickBox.svg';

function WalletsModal({ open, onSetOpen, onCloseModal, onOpenBalanceModal }) {
  const title = (
    <div className="text-center text-36 font-bold mt-8 mx-12 py-6 border-b border-solid border-gray">
      Your Wallet
    </div>
  );

  const content = (
    <div className="p-12">
      <div className="flex flex-col items-center">
        <div className="text-primary text-24 font-bold">
          0x7AA80e526e6DE0a140eE6D28Cf2f9BBFF49266dc
        </div>
        <div className="flex space-x-8 mt-10">
          <div className="flex items-center space-x-2">
            <div className="text-24">View on BscScan</div>
            <img src={tickBox} alt="tickBox" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-24">Copy Address</div>
            <img src={tickBox} alt="tickBox" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <button
          className="focus:outline-none bg-primary py-4 px-24 rounded-4xl
          text-24 font-bold text-black"
          onClick={onOpenBalanceModal}
        >
          LOGOUT
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
      />
    </div>
  );
}

export default WalletsModal;
