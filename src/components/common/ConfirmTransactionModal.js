import React from 'react';
import Modal from '../UI/Modal';
import transactionBroadcast from '../../assets/icons/transactionBroadcast.svg';

function WalletsModal({ open, onSetOpen, onCloseModal, onOpenBalanceModal }) {
  const title = (
    <div className="text-center text-36 font-bold mt-4 mx-12 py-6 border-b border-solid border-gray">
      Confirm Transaction
    </div>
  );

  const content = (
    <div className="py-8 px-4 sm:p-14">
      <div className="flex flex-col items-center">
        <img className="w-150px" src={transactionBroadcast} alt="transaction broadcast" />
        <div className="text-24 mt-8">Transaction Broadcast.</div>
      </div>
      <div className="flex justify-center mt-6 sm:mt-16">
        <button
          className="focus:outline-none bg-primary py-4 rounded-10px text-24 text-black w-80"
          onClick={onOpenBalanceModal}
        >
          View on AToken
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
