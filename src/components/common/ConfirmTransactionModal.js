import React from 'react';
import Modal from '../UI/Modal';
import logoMini from '../../assets/icons/logoMini.svg';
import transactionBroadcast from '../../assets/icons/transactionBroadcast.svg';

function WalletsModal({ open, onSetOpen, onCloseModal, onOpenBalanceModal }) {
  const title = (
    <div className="text-center text-xl font-bold mt-4 mx-12 py-6 border-b border-solid border-gray-600">
      Confirm Transaction
    </div>
  );

  const content = (
    <div className="p-14">
      <div className="flex flex-col items-center">
        <img className="w-150px" src={transactionBroadcast} alt="transaction broadcast" />
        <div className="text-xl font-bold mt-8">Transaction Broadcast.</div>
      </div>
      <div className="flex justify-center mt-16">
        <button
          className="focus:outline-none bg-primary py-4 rounded text-2xl
                 w-full max-w-350px text-black"
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
        width="max-w-xl"
      />
    </div>
  );
}

export default WalletsModal;
