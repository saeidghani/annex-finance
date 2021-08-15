import React from 'react';
import Modal from '../../components/UI/Modal';
import transactionBroadcast from '../../assets/icons/transactionBroadcast.svg';
import closeWhite from '../../assets/icons/closeWhite.svg';
import bigArrow from '../../assets/icons/bigArrow.svg';

function ExecuteTransactionModal({ open, onSetOpen, onCloseModal, onDelegateVotingOpen }) {
  const title = (
    <div
      className="flex justify-between items-center mt-4 mx-4 sm:mx-12 py-6
                  border-b border-solid border-lightGray"
    >
      <div className="">
        <img className="transform rotate-180 w-6" src={bigArrow} alt="" />
      </div>
      <div className="text-center text-36 font-bold">Transaction Pending</div>
      <div className="cursor-pointer" onClick={onCloseModal}>
        <img src={closeWhite} alt="" />
      </div>
    </div>
  );

  const content = (
    <div className="p-6">
      <div className="text-24 font-bold text-center">0 Votes</div>
      <div className="text-20 text-center mt-6">Manual Voting From 0x3709...feae</div>
      <div className="flex flex-col items-center mt-5">
        <img className="w-150px" src={transactionBroadcast} alt="transaction broadcast" />
        <div className="text-24 mt-9">Transaction Broadcast.</div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="focus:outline-none bg-primary py-2 px-14 mb-2 rounded-md text-24 text-black"
          onClick={onDelegateVotingOpen}
        >
          View on BscScan
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

export default ExecuteTransactionModal;
